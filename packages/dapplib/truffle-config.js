require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet rebel night modify idea arm army gauge'; 
let testAccounts = [
"0xbddd01055773e6b4279a2e7e714cb90b2a3bece248ea5ef05b1e5e7c0114ff2d",
"0xa5b9627b7cac739f854a5fb5ca89b04cd0d429bae08a3498a8ffd24313096dd1",
"0x14ad76a8536230b6d9f4b3cc9d79497592372ff3c7ca3d040fca94eb9037d72b",
"0xca1a432cd3772f13da1dab1b4a1d972914684999e9a98bb186381cc3abe2da1a",
"0xd3ed38a76c9a47faa88d92a4447a7132409068b662420b75fcc870021e814e3d",
"0xf34258e67b77518d273ab276ef4275657e3789990f8d0daaa1990f49a4035169",
"0x24f3c02d0d350727a8a4e23c2366849a87a533bbfa44817ef8541ff6e2273ec4",
"0x16586ab0733647b41c720e6074310bf19900fa34e2a1c0f99933e354768a0829",
"0x826f7c4ef1120ae5acdf4718d26c7d43469f41656bdbdcef487747c01cfd515a",
"0x36a9561634e59536fb12342550bb8ecdca6f3163712ac2d074ac7d31e466c3f0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
