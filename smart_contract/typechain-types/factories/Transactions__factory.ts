/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Transactions, TransactionsInterface } from "../Transactions";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "keyword",
        type: "string",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        internalType: "string",
        name: "keyword",
        type: "string",
      },
    ],
    name: "addToBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllTransactions",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "message",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "keyword",
            type: "string",
          },
        ],
        internalType: "struct Transactions.TransferStruct[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTransactionCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610bce806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806327506f53146100465780632e7700f014610064578063357bb2a814610082575b600080fd5b61004e61009e565b60405161005b919061049c565b60405180910390f35b61006c6100a3565b60405161007991906104cd565b60405180910390f35b61009c6004803603810190610097919061069b565b6100ac565b005b606090565b60008054905090565b60016000808282546100be9190610769565b9250508190555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030190816101f691906109a9565b506080820151816004015560a082015181600501908161021691906109a9565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa33858585428660405161025296959493929190610b29565b60405180910390a150505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102b78261028c565b9050919050565b6102c7816102ac565b82525050565b6000819050919050565b6102e0816102cd565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610320578082015181840152602081019050610305565b60008484015250505050565b6000601f19601f8301169050919050565b6000610348826102e6565b61035281856102f1565b9350610362818560208601610302565b61036b8161032c565b840191505092915050565b600060c08301600083015161038e60008601826102be565b5060208301516103a160208601826102be565b5060408301516103b460408601826102d7565b50606083015184820360608601526103cc828261033d565b91505060808301516103e160808601826102d7565b5060a083015184820360a08601526103f9828261033d565b9150508091505092915050565b60006104128383610376565b905092915050565b6000602082019050919050565b600061043282610260565b61043c818561026b565b93508360208202850161044e8561027c565b8060005b8581101561048a578484038952815161046b8582610406565b94506104768361041a565b925060208a01995050600181019050610452565b50829750879550505050505092915050565b600060208201905081810360008301526104b68184610427565b905092915050565b6104c7816102cd565b82525050565b60006020820190506104e260008301846104be565b92915050565b6000604051905090565b600080fd5b600080fd5b60006105078261028c565b9050919050565b610517816104fc565b811461052257600080fd5b50565b6000813590506105348161050e565b92915050565b610543816102cd565b811461054e57600080fd5b50565b6000813590506105608161053a565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6105a88261032c565b810181811067ffffffffffffffff821117156105c7576105c6610570565b5b80604052505050565b60006105da6104e8565b90506105e6828261059f565b919050565b600067ffffffffffffffff82111561060657610605610570565b5b61060f8261032c565b9050602081019050919050565b82818337600083830152505050565b600061063e610639846105eb565b6105d0565b90508281526020810184848401111561065a5761065961056b565b5b61066584828561061c565b509392505050565b600082601f83011261068257610681610566565b5b813561069284826020860161062b565b91505092915050565b600080600080608085870312156106b5576106b46104f2565b5b60006106c387828801610525565b94505060206106d487828801610551565b935050604085013567ffffffffffffffff8111156106f5576106f46104f7565b5b6107018782880161066d565b925050606085013567ffffffffffffffff811115610722576107216104f7565b5b61072e8782880161066d565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610774826102cd565b915061077f836102cd565b92508282019050808211156107975761079661073a565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806107e457607f821691505b6020821081036107f7576107f661079d565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261085f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610822565b6108698683610822565b95508019841693508086168417925050509392505050565b6000819050919050565b60006108a66108a161089c846102cd565b610881565b6102cd565b9050919050565b6000819050919050565b6108c08361088b565b6108d46108cc826108ad565b84845461082f565b825550505050565b600090565b6108e96108dc565b6108f48184846108b7565b505050565b5b818110156109185761090d6000826108e1565b6001810190506108fa565b5050565b601f82111561095d5761092e816107fd565b61093784610812565b81016020851015610946578190505b61095a61095285610812565b8301826108f9565b50505b505050565b600082821c905092915050565b600061098060001984600802610962565b1980831691505092915050565b6000610999838361096f565b9150826002028217905092915050565b6109b2826102e6565b67ffffffffffffffff8111156109cb576109ca610570565b5b6109d582546107cc565b6109e082828561091c565b600060209050601f831160018114610a135760008415610a01578287015190505b610a0b858261098d565b865550610a73565b601f198416610a21866107fd565b60005b82811015610a4957848901518255600182019150602085019450602081019050610a24565b86831015610a665784890151610a62601f89168261096f565b8355505b6001600288020188555050505b505050505050565b610a84816102ac565b82525050565b6000610aa5610aa0610a9b8461028c565b610881565b61028c565b9050919050565b6000610ab782610a8a565b9050919050565b6000610ac982610aac565b9050919050565b610ad981610abe565b82525050565b600082825260208201905092915050565b6000610afb826102e6565b610b058185610adf565b9350610b15818560208601610302565b610b1e8161032c565b840191505092915050565b600060c082019050610b3e6000830189610a7b565b610b4b6020830188610ad0565b610b5860408301876104be565b8181036060830152610b6a8186610af0565b9050610b7960808301856104be565b81810360a0830152610b8b8184610af0565b905097965050505050505056fea26469706673582212207d8f7c2bb536ff7b713d20d66ede227e787b0c84d2093314ac611e1395bb584264736f6c63430008120033";

type TransactionsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TransactionsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Transactions__factory extends ContractFactory {
  constructor(...args: TransactionsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Transactions> {
    return super.deploy(overrides || {}) as Promise<Transactions>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Transactions {
    return super.attach(address) as Transactions;
  }
  override connect(signer: Signer): Transactions__factory {
    return super.connect(signer) as Transactions__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransactionsInterface {
    return new utils.Interface(_abi) as TransactionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Transactions {
    return new Contract(address, _abi, signerOrProvider) as Transactions;
  }
}
