### Issue
### Error: ENOSPC: System limit for number of file watchers reached,
###

#### How to fix this.
```
$ cat /proc/sys/fs/inotify/max_user_watches
8192
$  echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
fs.inotify.max_user_watches=524288
$ sudo sysctl -p
vm.max_map_count = 262144
fs.inotify.max_user_watches = 524288

```
