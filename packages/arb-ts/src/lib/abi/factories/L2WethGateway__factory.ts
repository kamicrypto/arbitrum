/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { L2WethGateway } from '../L2WethGateway'

export class L2WethGateway__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<L2WethGateway> {
    return super.deploy(overrides || {}) as Promise<L2WethGateway>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L2WethGateway {
    return super.attach(address) as L2WethGateway
  }
  connect(signer: Signer): L2WethGateway__factory {
    return super.connect(signer) as L2WethGateway__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2WethGateway {
    return new Contract(address, _abi, signerOrProvider) as L2WethGateway
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_transferId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'InboundTransferFinalized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_transferId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'OutboundTransferInitiated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'callHookData',
        type: 'bytes',
      },
    ],
    name: 'TransferAndCallTriggered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL1',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2TokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'counterpartGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'exitNum',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gasReserveIfCallRevert',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'getOutboundCalldata',
    outputs: [
      {
        internalType: 'bytes',
        name: 'outboundCalldata',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Address',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'inboundEscrowAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_router',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l1Weth',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l2Weth',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l1Weth',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2Weth',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'postUpgradeInit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'router',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50611bf9806100206000396000f3fe6080604052600436106100c05760003560e01c80637b3a3c8b1161006f5780637b3a3c8b1461034757806395fcea78146103d5578063a0c76a96146103ea578063a7e28d48146104c3578063d2ce7d65146104f6578063f887ea4014610590578063f8c8765e146105a5576100c7565b8062aa3a9b146100cc578063015234ab146101a55780630f09eb51146101cc578063146bf4b1146101e1578063247b2768146102125780632db09c1c146102275780632e567b361461023c576100c7565b366100c757005b600080fd5b3480156100d857600080fd5b506101a3600480360360a08110156100ef57600080fd5b6001600160a01b0382358116926020810135926040820135831692606083013516919081019060a081016080820135600160201b81111561012f57600080fd5b82018360208201111561014157600080fd5b803590602001918460018302840111600160201b8311171561016257600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506105f0945050505050565b005b3480156101b157600080fd5b506101ba6107ea565b60408051918252519081900360200190f35b3480156101d857600080fd5b506101ba6107f0565b3480156101ed57600080fd5b506101f66107f6565b604080516001600160a01b039092168252519081900360200190f35b34801561021e57600080fd5b506101f6610805565b34801561023357600080fd5b506101f6610814565b6102d2600480360360a081101561025257600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561029457600080fd5b8201836020820111156102a657600080fd5b803590602001918460018302840111600160201b831117156102c757600080fd5b509092509050610823565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561030c5781810151838201526020016102f4565b50505050905090810190601f1680156103395780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102d26004803603608081101561035d57600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561039757600080fd5b8201836020820111156103a957600080fd5b803590602001918460018302840111600160201b831117156103ca57600080fd5b509092509050610e17565b3480156103e157600080fd5b506101a3610e29565b3480156103f657600080fd5b506102d2600480360360a081101561040d57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561044f57600080fd5b82018360208201111561046157600080fd5b803590602001918460018302840111600160201b8311171561048257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610e9e945050505050565b3480156104cf57600080fd5b506101f6600480360360208110156104e657600080fd5b50356001600160a01b0316611015565b6102d2600480360360c081101561050c57600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b81111561055257600080fd5b82018360208201111561056457600080fd5b803590602001918460018302840111600160201b8311171561058557600080fd5b509092509050611028565b34801561059c57600080fd5b506101f661123b565b3480156105b157600080fd5b506101a3600480360360808110156105c857600080fd5b506001600160a01b03813581169160208101358216916040820135811691606001351661124a565b333014610644576040805162461bcd60e51b815260206004820152601f60248201527f4d696e742063616e206f6e6c792062652063616c6c65642062792073656c6600604482015290519081900360640190fd5b610656826001600160a01b031661131c565b6106a7576040805162461bcd60e51b815260206004820152601e60248201527f44657374696e6174696f6e206d757374206265206120636f6e74726163740000604482015290519081900360640190fd5b6106b2858386611322565b60006106bc6107f0565b5a039050805a116106fe5760405162461bcd60e51b815260040180806020018281038252602b815260200180611b6f602b913960400191505060405180910390fd5b826001600160a01b031663a4c0ed36828688866040518563ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561077b578181015183820152602001610763565b50505050905090810190601f1680156107a85780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600088803b1580156107c957600080fd5b5087f11580156107dd573d6000803e3d6000fd5b5050505050505050505050565b60025481565b61138890565b6003546001600160a01b031681565b6004546001600160a01b031681565b6000546001600160a01b031681565b606061082e33611391565b61087a576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b6060808484604081101561088d57600080fd5b810190602081018135600160201b8111156108a757600080fd5b8201836020820111156108b957600080fd5b803590602001918460018302840111600160201b831117156108da57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561092c57600080fd5b82018360208201111561093e57600080fd5b803590602001918460018302840111600160201b8311171561095f57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509799509297506109a995508f94506113a59350505050565b90506109bd816001600160a01b031661131c565b6109f65760006109d18b838c8c8c896113d6565b905080156109f45760405180602001604052806000815250945050505050610e0d565b505b60408051600481526024810182526020810180516001600160e01b031663c2eeeebd60e01b178152915181516000936060936001600160a01b038716939092909182918083835b60208310610a5c5780518252601f199092019160209182019101610a3d565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d8060008114610abc576040519150601f19603f3d011682016040523d82523d6000602084013e610ac1565b606091505b50915091506000821580610ad6575060208251105b15610ae357506001610b12565b6000610af083600c611402565b90508d6001600160a01b0316816001600160a01b031614610b1057600191505b505b8015610b5257610b348d308e8d60405180602001604052806000815250611462565b50604051806020016040528060008152509650505050505050610e0d565b50508251159050610d4c576000306001600160a01b031662aa3a9b838a8d8d886040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001846001600160a01b03166001600160a01b03168152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610c0c578181015183820152602001610bf4565b50505050905090810190601f168015610c395780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b158015610c5c57600080fd5b505af1925050508015610c6d575060015b610c8157610c7c828b8a611322565b610c85565b5060015b886001600160a01b03168a6001600160a01b03167f11ff8525c5d96036231ee652c108808dee4c40728a6117830a75029298bb7de6838b87604051808415151515815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610d0a578181015183820152602001610cf2565b50505050905090810190601f168015610d375780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a350610d57565b610d57818989611322565b806001600160a01b0316886001600160a01b03168a6001600160a01b03167f179a84706122b1b806f7d61c28c5caef276b7ff474ae596df3cad4bbaf0eb97d8d8b8b8b60405180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f191690920182900397509095505050505050a46040518060200160405280600081525093505050505b9695505050505050565b6060610e0d8686866000808888611028565b6001546001600160a01b031615610e76576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600180546001600160a01b031916735288c571fd7ad117bea99bf60fe0846c4e84f933179055565b6060632e567b3660e01b86868686600254876040516020018083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610ef6578181015183820152602001610ede565b50505050905090810190601f168015610f235780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152908290526001600160a01b03808b16602484019081528a8216604485015290891660648401526084830188905260a060a48401908152825160c48501528251929750909550935060e49091019150602085019080838360005b83811015610fa2578181015183820152602001610f8a565b50505050905090810190601f168015610fcf5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a16999099179098525095965050505050505095945050505050565b6000611020826113a5565b90505b919050565b60603415611068576040805162461bcd60e51b81526020600482015260086024820152674e4f5f56414c554560c01b604482015290519081900360640190fd5b600060606110ab85858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061147b92505050565b915091506000806110bb8c6113a5565b90506110cf816001600160a01b031661131c565b611115576040805162461bcd60e51b81526020600482015260126024820152711513d2d15397d393d517d111541313d6515160721b604482015290519081900360640190fd5b61112081858c61156e565b61112d8c858d8d87611462565b915050600260008154809291906001019190505550808a6001600160a01b0316846001600160a01b03167f9c003a9d1163eca79021710dcd5d9f657218bf2bd67aaa13389009a6047894a88e8d8760405180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156111d65781810151838201526020016111be565b50505050905090810190601f1680156112035780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a46040805160208082019390935281518082039093018352810190529a9950505050505050505050565b6001546001600160a01b031681565b61125484846115eb565b6001600160a01b0382166112a0576040805162461bcd60e51b815260206004820152600e60248201526d0929cac82989288be9862ae8aa8960931b604482015290519081900360640190fd5b6001600160a01b0381166112ec576040805162461bcd60e51b815260206004820152600e60248201526d0929cac82989288be9864ae8aa8960931b604482015290519081900360640190fd5b600380546001600160a01b039384166001600160a01b031991821617909155600480549290931691161790555050565b3b151590565b826001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b15801561135d57600080fd5b505af1158015611371573d6000803e3d6000fd5b5061138c935050506001600160a01b038516905083836115f9565b505050565b6000546001600160a01b0390811691161490565b6003546000906001600160a01b038381169116146113c557506000611023565b50506004546001600160a01b031690565b60006113f48730878660405180602001604052806000815250611462565b506001979650505050505050565b60008160140183511015611452576040805162461bcd60e51b815260206004820152601260248201527152656164206f7574206f6620626f756e647360701b604482015290519081900360640190fd5b500160200151600160601b900490565b6000610e0d85846114768989898989610e9e565b61164b565b6000606061148833611670565b15611563578280602001905160408110156114a257600080fd5b815160208301805160405192949293830192919084600160201b8211156114c857600080fd5b9083019060208201858111156114dd57600080fd5b8251600160201b8111828201881017156114f657600080fd5b82525081516020918201929091019080838360005b8381101561152357818101518382015260200161150b565b50505050905090810190601f1680156115505780820380516001836020036101000a031916815260200191505b5060405250929450909250611569915050565b50339050815b915091565b826001600160a01b03166374f4f54783836040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156115ce57600080fd5b505af11580156115e2573d6000803e3d6000fd5b50505050505050565b6115f58282611684565b5050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261138c90849061168e565b6000805461166690849086906001600160a01b03168561173f565b90505b9392505050565b6001546001600160a01b0390811691161490565b6115f582826118d8565b60606116e3826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166119a49092919063ffffffff16565b80519091501561138c5780806020019051602081101561170257600080fd5b505161138c5760405162461bcd60e51b815260040180806020018281038252602a815260200180611b9a602a913960400191505060405180910390fd5b604080516349460b4d60e11b81526001600160a01b0384166004820190815260248201928352835160448301528351600093849360649363928c169a938b938a938a93929088019060208501908083838d5b838110156117a9578181015183820152602001611791565b50505050905090810190601f1680156117d65780820380516001836020036101000a031916815260200191505b5093505050506020604051808303818588803b1580156117f557600080fd5b505af1158015611809573d6000803e3d6000fd5b50505050506040513d602081101561182057600080fd5b5051604080516020808252865182820152865193945084936001600160a01b03808a1694908b16937f2b986d32a0536b7e19baa48ab949fec7b903b7fad7730820b20632d100cc3a68938a93919283929083019185019080838360005b8381101561189557818101518382015260200161187d565b50505050905090810190601f1680156118c25780820380516001836020036101000a031916815260200191505b509250505060405180910390a495945050505050565b6001600160a01b038216611929576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6000546001600160a01b031615611976576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055565b60606116668484600085856119b88561131c565b611a09576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310611a485780518252601f199092019160209182019101611a29565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611aaa576040519150601f19603f3d011682016040523d82523d6000602084013e611aaf565b606091505b5091509150611abf828286611aca565b979650505050505050565b60608315611ad9575081611669565b825115611ae95782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611b33578181015183820152602001611b1b565b50505050905090810190601f168015611b605780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe4d696e7420616e642063616c6c20676173206c6566742063616c63756c6174696f6e20756e6465666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220f4ab7600229e2581d78e4a4bc406e283c779f92ad3e0169c80d6d85b88cdf78364736f6c634300060b0033'