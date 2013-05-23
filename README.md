node-mkprg for vim

# Install

    npm install -g node-mkprg

# Usage

    node-mkprg [file]

This will attempt to find a package.json with a start script in
parent directories. If it is found that command is executed. 

Otherwise, the file is executed with `node` in the current directory.

# Using with Vim

Install the Node.js error format plugin: https://github.com/felixge/vim-nodejs-errorformat

Change the [following line](https://github.com/felixge/vim-nodejs-errorformat/blob/master/ftplugin/javascript.vim#L6) in `javascript.vim`:

    let &makeprg="node %"

by 

    let &makeprg="node-makeprg %"

# TODO

Pull request vim-nodejs-errorformat and use environment
variable/vim configuration to determine which makeprg to use.
