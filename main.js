import {
	createApp,
	computed,
	ref,
	reactive,
	onMounted,
	onUnmounted,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
	setup() {
		const isOpen = ref(false);
		const creations = [
			{
				text1: "deep ",
				text2: "earth",
				img: "image-deep-earth.jpg",
			},
			{
				text1: "night",
				text2: "arcade",
				img: "image-night-arcade.jpg",
			},
			{
				text1: "soccer",
				text2: "team vr",
				img: "image-soccer-team.jpg",
			},
			{
				text1: "the",
				text2: "grid",
				img: "image-grid.jpg",
			},
			{
				text1: "from up",
				text2: "above vr",
				img: "image-from-above.jpg",
			},
			{
				text1: "pocket",
				text2: "borealis",
				img: "image-pocket-borealis.jpg",
			},
			{
				text1: "the",
				text2: "curiosity",
				img: "image-curiosity.jpg",
			},
			{
				text1: "make it",
				text2: "fisheye",
				img: "image-fisheye.jpg",
			},
		];
		const menuIcon = computed(() => {
			return isOpen.value ? "icon-close.svg" : "icon-hamburger.svg";
		});
		function toggleMenu() {
			isOpen.value = !isOpen.value;
		}
		const windowSize = reactive({
			width: window.innerWidth,
			height: window.innerHeight,
		});
		const device = computed(() => {
			return windowSize.width > 768 ? 'desktop' : 'mobile'
		})
		function handleResize() {
			windowSize.width = window.innerWidth;
			windowSize.height = window.innerHeight;
		}
		onMounted(() => {
			window.addEventListener("resize", handleResize);
		});

		onUnmounted(() => {
			window.removeEventListener("resize", handleResize);
		});
		return {
			isOpen,
			menuIcon,
			toggleMenu,
			windowSize,
			device,
			creations,
		};
	},
}).mount("#app");
