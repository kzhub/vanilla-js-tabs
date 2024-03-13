export class Tabs {
	/**
	 * Creates an instance of Tabs.
	 * 
	 * @param {string} tabSelector - The CSS selector for tab elements.
	 * @param {string} bodySelector - The CSS selector for body elements associated with tabs.
	 * @throws {Error} Throws an error if the number of tabs and bodies don't match or if either is empty.
	 */

	constructor(tabSelector, bodySelector) {
		this.tabs = document.querySelectorAll(tabSelector);
		this.bodys = document.querySelectorAll(bodySelector);

		if (this.tabs.length !== this.bodys.length || this.tabs.length === 0 || this.bodys.length === 0) {
			throw new Error("Initialization error: Tab and body lengths don't match or are empty.");
		}

		this.watchTabs();
	}

	watchTabs() {
			/**
		 * Handles click event for tabs.
		 * @param {number} clickedIndex - The index of the clicked tab.
		 */
		const handleClick = (clickedIndex) => {
			this.tabs.forEach((tab, index) => {
				this.tabs[index].classList.remove('active');
				this.bodys[index].classList.remove('active');
			});

			this.tabs[clickedIndex].classList.add('active');
			this.bodys[clickedIndex].classList.add('active');
		};

		this.tabs.forEach((tab, index) => {
			tab.addEventListener('click', () => {
				handleClick(index);
			});
		});
	}
}
