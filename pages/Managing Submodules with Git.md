- ## Commands
	- Clone [[Repository]] with all it's submodules
		- `git clone --recursive-submodules <uri-to-repo>`
	- Add [[Submodule]] to existing Git Repository
		- `git submodule add <uri-to-submodule> <path-on-disk>`
	- Run same [[Git]] command on every Submodule
		- `git submodule foreach git <any-git command>`
	- Remove a Submodule
		- `git rm <the-submodule>`
		- `git -rf .git/modules/the-submodule`
- The <uri-to-repo> can be a simple Github or Gitlab URL; anyone can publish their software for free there.
-