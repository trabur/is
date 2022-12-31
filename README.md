interface system
=================

what is:
- law of orthogonality
- double jeapady

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install --global
$ is COMMAND
running command...
$ is (--version)
is/0.0.0 darwin-x64 node-v18.3.0
$ is --help [COMMAND]
USAGE
  $ is COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`is hello PERSON`](#is-hello-person)
* [`is hello world`](#is-hello-world)
* [`is help [COMMAND]`](#is-help-command)
* [`is plugins`](#is-plugins)
* [`is plugins:install PLUGIN...`](#is-pluginsinstall-plugin)
* [`is plugins:inspect PLUGIN...`](#is-pluginsinspect-plugin)
* [`is plugins:install PLUGIN...`](#is-pluginsinstall-plugin-1)
* [`is plugins:link PLUGIN`](#is-pluginslink-plugin)
* [`is plugins:uninstall PLUGIN...`](#is-pluginsuninstall-plugin)
* [`is plugins:uninstall PLUGIN...`](#is-pluginsuninstall-plugin-1)
* [`is plugins:uninstall PLUGIN...`](#is-pluginsuninstall-plugin-2)
* [`is plugins update`](#is-plugins-update)

## `is hello PERSON`

Say hello

```
USAGE
  $ is hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/trabur/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `is hello world`

Say hello world

```
USAGE
  $ is hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ is hello world
  hello world! (./src/commands/hello/world.ts)
```

## `is help [COMMAND]`

Display help for is.

```
USAGE
  $ is help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for is.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.20/src/commands/help.ts)_

## `is plugins`

List installed plugins.

```
USAGE
  $ is plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ is plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.9/src/commands/plugins/index.ts)_

## `is plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ is plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ is plugins add

EXAMPLES
  $ is plugins:install myplugin 

  $ is plugins:install https://github.com/someuser/someplugin

  $ is plugins:install someuser/someplugin
```

## `is plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ is plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ is plugins:inspect myplugin
```

## `is plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ is plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ is plugins add

EXAMPLES
  $ is plugins:install myplugin 

  $ is plugins:install https://github.com/someuser/someplugin

  $ is plugins:install someuser/someplugin
```

## `is plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ is plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ is plugins:link myplugin
```

## `is plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ is plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ is plugins unlink
  $ is plugins remove
```

## `is plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ is plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ is plugins unlink
  $ is plugins remove
```

## `is plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ is plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ is plugins unlink
  $ is plugins remove
```

## `is plugins update`

Update installed plugins.

```
USAGE
  $ is plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
