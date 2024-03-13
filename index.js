import { Tabs } from "./tab.js";

try {
	const myTabs = new Tabs('.tabsHeaderContent', '.tabsBodyContent');
} catch (error) {
	console.error("Error:", error.message);
}
