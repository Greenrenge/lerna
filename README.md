# LERNA Sample
### How to tell lerna to publish npm under public access (`--access=public`) 
for public package inside the lerna we need to specify config in each packages folders
## in package.json file
```
  "publishConfig": {
    "access": "public"
  }
```
##### `https://github.com/lerna/lerna/issues/914`

## Lerna Bootstrap
```
lerna bootstrap
``` 
this command will use name convention `packages/${name}` and `@scope/${name}` to create symlink between packages if it has dependency on each others*

when dependent packages got edited, it will reflect to other package(s) immediately.

if some packages we don't want them to be reflected by dependencies code changing. we then set to fixed version(accord to published version on npm) to package.json file.

```
"dependencies": {
    "@greenrenge/ex-push-messages": "1.0.1"
  }
```
*in the way of dependency's semantic version specified in package.json of both dependent and dependency.

 ## Lerna Publish
```
lerna publish
``` 
this command will increase the version number appears in all package.json file and publish all packages to npmjs registry.
after publish to npm, package.json dependencies version will be increased automatically to any change has been made to the package that the package has the dependency on.

