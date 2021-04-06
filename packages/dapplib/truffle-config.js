require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift rescue saddle concert hunt merry fog gas'; 
let testAccounts = [
"0x452529e959a032c6058021a3d8ff95556e0a0e859a144930c852a72b2a3a9d5d",
"0x0bc919023360c4fe9d35ecda6aa3f5d735f2eeb585e982f4565cb34a320aff08",
"0xacdec35546431ce266dcfa3c9e13cb37a1224018914f4094e6f59c620b3afaf2",
"0x2fa0ed03fca296c0934560e5edd1c2d9a1336bbfe615411316de616c8481dca1",
"0x384a421bfd0f89c630d3f6d9ef70f8c0a5619bc771c98b5ee096a239d0013c43",
"0xb33e731ea0d6c5c9af03b7129cb058d36fe9b718bcce76ee70d6916135490e99",
"0x7e38a23dda818cda788cf4147d12135a438676c0727cf0ad6de68984d1738fd9",
"0xdef4bc0368b7ac74c4446d7455e07bf17e32df61fa7a081ace2d7468cc9e907b",
"0x58aaf407b94f647028365dab26a0073bc52094960ae677f815d6db3ee0dd5acc",
"0xaa6e29030344ac650f1514141df7d754cb79852b804ce42e3f49e970a89e9fa1"
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
