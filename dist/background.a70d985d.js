(()=>{function e(){console.log("Sorting and grouping tabs"),chrome.tabs.query({},e=>{e.sort((e,r)=>{let t=e.url.split("/")[2],o=r.url.split("/")[2];return t===o?e.lastAccessed-r.lastAccessed:t.localeCompare(o)}).forEach((e,r)=>{chrome.tabs.move(e.id,{index:r})})}),chrome.tabs.query({},e=>{chrome.tabGroups.query({},r=>{let t=r.reduce((e,r)=>(e[r.title]=r.id,e),{});Object.entries(e.reduce((e,r)=>{let t=r.url.split("/")[2];return e[t]||(e[t]=[]),e[t].push(r.id),e},{})).forEach(([e,t])=>{let o=r.find(r=>r.title===e);o?chrome.tabs.group({groupId:o.id,tabIds:t}):chrome.tabs.group({tabIds:t},r=>{chrome.tabGroups.update(r,{title:e})})}),chrome.tabs.query({active:!0},e=>{let o=t[e[0].url.split("/")[2]];r.forEach(e=>{e.id!==o&&chrome.tabGroups.update(e.id,{collapsed:!0})})})})})}chrome.commands.onCommand.addListener(r=>{"sort"===r&&e()}),chrome.alarms.create("5min",{delayInMinutes:5,periodInMinutes:5}),chrome.alarms.onAlarm.addListener(function(r){"5min"===r.name&&e()})})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ik0sUyxJQUVFLFFBQUEsR0FBQSxDQUFBLDZCQUNBLE9BQUEsSUFBUSxDQUFBLEtBQVIsQ0FBQSxDQUFBLEVBQUEsQUFBQSxJQUNtQixBQWNrQixFQWRyQyxJQUFBLENBQUEsQ0FBQSxFQUFBLEtBQ0UsSUFBQSxFQUFNLEVBQUEsR0FBYSxDQUFBLEtBQUssQ0FBQSxJQUFNLENBQUEsRUFBRyxDQUMvQixFQUFNLEVBQUEsR0FBQSxDQUFVLEtBQUssQ0FBQyxJQUFBLENBQUssRUFBQyxRQUk1QixBQUFBLElBQUksRUFHSixFQUFBLEtBQUEsT0FBZSxDQUFBLEVBQUEsWUFBZixDQUdGLEVBQUEsYUFBQSxDQUFBLEVBQ0EsR0FDbUMsT0FBQSxDQUFBLENBQUEsRUFBQSxLQUNuQyxPQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsRUFBQSxFQUFBLENBQUEsT0FBQSxDQUFBLEVBQ0YsRUFDQSxHQUdFLE9BQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEVBQUEsQUFBQSxJQUVFLE9BQUEsU0FBTSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEVBQWMsQUFBZCxJQUNKLElBQUEsRUFBSSxFQUFlLE1BQUcsQ0FBQSxDQUFBLEVBQVcsS0FDakMsQ0FBQSxDQUFBLEVBQUEsS0FBQSxDQUFBLENBQUEsRUFBQSxFQUFBLENBQ0MsR0FFSCxDQUFBLEdBa0J5QyxPQUFBLE9BQUEsQ0FkdkMsQUFjdUMsRUFkakMsTUFBUyxDQUFBLENBQUEsRUFBUSxLQUt2QixJQUFBLEVBQU8sRUFBUCxHQUFBLENBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxFQUFBLENBTUEsT0FMRixDQUFJLENBQUosRUFBQSxHQUVBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxBQUFBLEVBRUEsQ0FBQSxDQUFBLEVBQU8sQ0FBQSxJQUFBLENBQUEsRUFBUSxFQUFBLEVBQ2IsQ0FDQSxFQUFBLENBQUEsSUFFdUMsT0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLEVBQUEsSUFBYyxJQUFBLEVBQUEsRUFBQSxJQUFBLENBQUEsQUFBQSxHQUFBLEVBQUEsS0FBQSxHQUFBLEdBQ25ELEVBT0osT0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLENBRUEsUUFBQSxFQUFBLEVBQUEsUUFDQSxDQUFvQixHQVJoQixPQUFBLElBQUEsQ0FBQSxLQUFBLENBQU8sUUFBQSxDQUFLLEVBQVosQUFBQSxJQUNFLE9BQUEsU0FBQSxDQUFTLE1BQUEsQ0FBQSxFQUFULENBQUEsTUFBQSxDQUFBLEVBQ0EsRUFPSixHQUlBLE9BQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFVLFFBQVEsQ0FBbEIsRUFBQSxBQUFBLElBRTJELElBQUEsRUFBQSxDQUFBLENBRHJELEFBQ3FDLEFBQWdCLENBRDFDLENBQUEsRUFBQSxDQUMwQixHQUFBLENBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxFQUFBLENBQWdCLENBRzdELEVBQUEsT0FBQSxDQUFBLEFBQUEsSUFDRixFQUFBLEVBQUEsR0FBQSxHQUNGLE9BQUEsU0FBQSxDQUFBLE1BQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBLFdBQUEsQ0FBQSxFQUlLLEVBQ0wsRUFHRixFQUVBLEVBQ0UsQ0FJRixPQUFBLFFBQUEsQ0FBQSxTQUFBLENBQUEsV0FBQSxDQUFBLEFBQUEsSUFDYyxTQUFkLEdBQ0UsRyxHLE8sTSxDLE0sQyxPLEMsZSxFLGdCLEMsRyxPLE0sQyxPLEMsVyxDLFMsQyxFLFMsRSxJLEUsRyIsInNvdXJjZXMiOlsic3JjL2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiBzb3J0QW5kR3JvdXBUYWJzKCkge1xuICAvLyBnZXQgYWxsIHRoZSB0YWJzIGluIGNocm9tZSBhbmQgdGhlbiBzb3J0IGl0IGFzIHBlciBkb21haW4gbmFtZVxuICBjb25zb2xlLmxvZygnU29ydGluZyBhbmQgZ3JvdXBpbmcgdGFicycpO1xuICBjaHJvbWUudGFicy5xdWVyeSh7fSwgKHRhYnMpID0+IHtcbiAgICBjb25zdCBzb3J0ZWRUYWJzID0gdGFicy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBkb21haW5BID0gYS51cmwuc3BsaXQoJy8nKVsyXTtcbiAgICAgIGNvbnN0IGRvbWFpbkIgPSBiLnVybC5zcGxpdCgnLycpWzJdO1xuXG4gICAgICAvLyAgZG8gc2Vjb25kIGxldmVsIHNvcnRpbmcgYnkgbGFzdEFjY2Vzc2VkIHRpbWVcbiAgICAgIGlmIChkb21haW5BID09PSBkb21haW5CKSB7XG4gICAgICAgIHJldHVybiBhLmxhc3RBY2Nlc3NlZCAtIGIubGFzdEFjY2Vzc2VkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRvbWFpbkEubG9jYWxlQ29tcGFyZShkb21haW5CKTtcbiAgICB9KTtcblxuICAgIC8vIHVwZGF0ZSB0aGUgdGFiIHdpdGggdGhlIHNvcnRlZCB0YWJzXG4gICAgc29ydGVkVGFicy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiB7XG4gICAgICBjaHJvbWUudGFicy5tb3ZlKHRhYi5pZCwgeyBpbmRleCB9KTtcbiAgICB9KTtcbiAgfSlcbiAgLy8gTm93IGZvciB0aGUgdGFicyB3aXRoIHNhbWUgZG9tYWluLCBidWlsZCB0YWcgZ3JvdXAgYW5kIGxhYmVsIHRoZW0gYnkgdGhlIGRvbWFpbiBuYW1lXG4gIC8vIGFuZCBhbHNvIGNvbGxhcHNlIHRoZSB0YWJsIGdyb3VwIGFwYXJ0IGZyb20gdGhlIGFjdGl2ZSB0YWJcbiAgY2hyb21lLnRhYnMucXVlcnkoe30sICh0YWJzKSA9PiB7XG4gICAgLy8gdXNlIHRoZSB0YWJHcm91cHMgYXBpXG4gICAgY2hyb21lLnRhYkdyb3Vwcy5xdWVyeSh7fSwgKHRhYkdyb3VwcykgPT4ge1xuICAgICAgY29uc3QgdGFiR3JvdXBNYXAgPSB0YWJHcm91cHMucmVkdWNlKChhY2MsIHRhYkdyb3VwKSA9PiB7XG4gICAgICAgIGFjY1t0YWJHcm91cC50aXRsZV0gPSB0YWJHcm91cC5pZDtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcblxuICAgICAgLy8gYnVpbGQgdGhlIHRhYk1hcFxuICAgICAgY29uc3QgdGFiTWFwID0gdGFicy5yZWR1Y2UoKGFjYywgdGFiKSA9PiB7XG4gICAgICAgIC8vIGJ1aWxkIG1hcCBieSBkb21haW5cblxuICAgICAgICBjb25zdCBkb21haW4gPSB0YWIudXJsLnNwbGl0KCcvJylbMl07XG4gICAgICAgIGlmICghYWNjW2RvbWFpbl0pIHtcbiAgICAgICAgICBhY2NbZG9tYWluXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGFjY1tkb21haW5dLnB1c2godGFiLmlkKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcblxuICAgICAgLy8gdGhlcmUgaXMgc29tZXRoaW5nIHdyb25nLCBlYWNoIHRhYiBoYXMgaXRzIG93biBzdWJncm91cCByaWdodCBub3dcbiAgICAgIC8vIHdlIG5lZWQgdG8gZ3JvdXAgdGhlbSBieSBkb21haW4gbmFtZVxuICAgICAgT2JqZWN0LmVudHJpZXModGFiTWFwKS5mb3JFYWNoKChbZG9tYWluLCB0YWJJZHNdKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYkdyb3VwID0gdGFiR3JvdXBzLmZpbmQoKHRhYkdyb3VwKSA9PiB0YWJHcm91cC50aXRsZSA9PT0gZG9tYWluKTtcbiAgICAgICAgaWYgKCF0YWJHcm91cCkge1xuICAgICAgICAgIGNocm9tZS50YWJzLmdyb3VwKHsgdGFiSWRzIH0sIChncm91cElkKSA9PiB7XG4gICAgICAgICAgICBjaHJvbWUudGFiR3JvdXBzLnVwZGF0ZShncm91cElkLCB7IHRpdGxlOiBkb21haW4gfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hyb21lLnRhYnMuZ3JvdXAoe1xuICAgICAgICAgICAgZ3JvdXBJZDogdGFiR3JvdXAuaWQsXG4gICAgICAgICAgICB0YWJJZHMsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBjb2xsYXBzZSBhbGwgdGhlIHRhYkdyb3VwcyBhcGFydCBmcm9tIHRoZSBhY3RpdmUgdGFiXG4gICAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9LCAoYWN0aXZlVGFicykgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVUYWIgPSBhY3RpdmVUYWJzWzBdO1xuICAgICAgICBjb25zdCBkb21haW4gPSBhY3RpdmVUYWIudXJsLnNwbGl0KCcvJylbMl07XG4gICAgICAgIGNvbnN0IGFjdGl2ZVRhYkdyb3VwSWQgPSB0YWJHcm91cE1hcFtkb21haW5dO1xuXG4gICAgICAgIHRhYkdyb3Vwcy5mb3JFYWNoKCh0YWJHcm91cCkgPT4ge1xuICAgICAgICAgIGlmICh0YWJHcm91cC5pZCAhPT0gYWN0aXZlVGFiR3JvdXBJZCkge1xuICAgICAgICAgICAgY2hyb21lLnRhYkdyb3Vwcy51cGRhdGUodGFiR3JvdXAuaWQsIHsgY29sbGFwc2VkOiB0cnVlIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cblxuY2hyb21lLmNvbW1hbmRzLm9uQ29tbWFuZC5hZGRMaXN0ZW5lcigoY29tbWFuZCkgPT4ge1xuICBpZiAoY29tbWFuZCA9PT0gJ3NvcnQnKSB7XG4gICAgc29ydEFuZEdyb3VwVGFicygpO1xuICB9XG59KTtcblxuY2hyb21lLmFsYXJtcy5jcmVhdGUoXCI1bWluXCIsIHtcbiAgZGVsYXlJbk1pbnV0ZXM6IDUsXG4gIHBlcmlvZEluTWludXRlczogNVxufSk7XG5cbi8vIFRvIGVuc3VyZSBhIG5vbi1wZXJzaXN0ZW50IHNjcmlwdCB3YWtlcyB1cCwgY2FsbCB0aGlzIGNvZGUgYXQgaXRzIHN0YXJ0IHN5bmNocm9ub3VzbHlcbmNocm9tZS5hbGFybXMub25BbGFybS5hZGRMaXN0ZW5lcihmdW5jdGlvbihhbGFybSkge1xuICBpZiAoYWxhcm0ubmFtZSA9PT0gXCI1bWluXCIpIHtcbiAgICBzb3J0QW5kR3JvdXBUYWJzKCk7XG4gIH1cbn0pOyJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJiYWNrZ3JvdW5kLkhBU0hfUkVGXzNmYTgxYzRkZjhiMzlmYjYuanMubWFwIn0=