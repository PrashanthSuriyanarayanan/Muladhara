# Muladhara
Creating and deploying a contract in rinkeby.

## Instructions

###### Install windows build tools
<pre>npm install -g --production windows-build-tools</pre>


###### Clone and install the dependencies
<pre>
  git clone https://github.com/PrashanthSuriyanarayanan/my-blockchain-journey/vinayaga.git
  npm install
</pre>


###### Run test script
<pre>npm run test</pre>


###### Deploy the contract to Rinkeby

> Add your seed words and rinkeby endpoint separated by a comma in deploy script before running it.

<pre>node deploy.js</pre>


###### To check the deployed contracts and further transactions.
Hit the [link](https://rinkeby.etherscan.io/address/) and `append the address which you get after running the above cmd to the link`
