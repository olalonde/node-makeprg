node-mkprg for vim

# Install

    npm install -g node-mkprg

# Usage

    node-mkprg [file]

This will attempt to find a package.json with a start script in
parent directories. If it is found that command is executed. 

Otherwise, the file is executed with `node` in the current directory.
