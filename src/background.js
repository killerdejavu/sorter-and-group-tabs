
function sortAndGroupTabs() {
  // get all the tabs in chrome and then sort it as per domain name
  console.log('Sorting and grouping tabs');
  chrome.tabs.query({}, (tabs) => {
    const sortedTabs = tabs.sort((a, b) => {
      const domainA = a.url.split('/')[2];
      const domainB = b.url.split('/')[2];

      //  do second level sorting by lastAccessed time
      if (domainA === domainB) {
        return a.lastAccessed - b.lastAccessed;
      }
      return domainA.localeCompare(domainB);
    });

    // update the tab with the sorted tabs
    sortedTabs.forEach((tab, index) => {
      chrome.tabs.move(tab.id, { index });
    });
  })
  // Now for the tabs with same domain, build tag group and label them by the domain name
  // and also collapse the tabl group apart from the active tab
  chrome.tabs.query({}, (tabs) => {
    // use the tabGroups api
    chrome.tabGroups.query({}, (tabGroups) => {
      const tabGroupMap = tabGroups.reduce((acc, tabGroup) => {
        acc[tabGroup.title] = tabGroup.id;
        return acc;
      }, {});

      // build the tabMap
      const tabMap = tabs.reduce((acc, tab) => {
        // build map by domain

        const domain = tab.url.split('/')[2];
        if (!acc[domain]) {
          acc[domain] = [];
        }
        acc[domain].push(tab.id);
        return acc;
      }, {});

      // there is something wrong, each tab has its own subgroup right now
      // we need to group them by domain name
      Object.entries(tabMap).forEach(([domain, tabIds]) => {
        const tabGroup = tabGroups.find((tabGroup) => tabGroup.title === domain);
        if (!tabGroup) {
          chrome.tabs.group({ tabIds }, (groupId) => {
            chrome.tabGroups.update(groupId, { title: domain });
          });
        } else {
          chrome.tabs.group({
            groupId: tabGroup.id,
            tabIds,
          });
        }
      });

      // collapse all the tabGroups apart from the active tab
      chrome.tabs.query({ active: true }, (activeTabs) => {
        const activeTab = activeTabs[0];
        const domain = activeTab.url.split('/')[2];
        const activeTabGroupId = tabGroupMap[domain];

        tabGroups.forEach((tabGroup) => {
          if (tabGroup.id !== activeTabGroupId) {
            chrome.tabGroups.update(tabGroup.id, { collapsed: true });
          }
        });
      });
    });
  });
}


chrome.commands.onCommand.addListener((command) => {
  if (command === 'sort') {
    sortAndGroupTabs();
  }
});

// call sortAndGroup every 5 mins as well
setInterval(sortAndGroupTabs, 5 * 60 * 1000);