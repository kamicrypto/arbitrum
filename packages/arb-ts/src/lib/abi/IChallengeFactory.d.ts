/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface IChallengeFactoryInterface extends ethers.utils.Interface {
  functions: {
    'createChallenge(address,bytes32,uint256,address,address,uint256,uint256,address,address)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'createChallenge',
    values: [
      string,
      BytesLike,
      BigNumberish,
      string,
      string,
      BigNumberish,
      BigNumberish,
      string,
      string
    ]
  ): string

  decodeFunctionResult(
    functionFragment: 'createChallenge',
    data: BytesLike
  ): Result

  events: {}
}

export class IChallengeFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: IChallengeFactoryInterface

  functions: {
    createChallenge(
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'createChallenge(address,bytes32,uint256,address,address,uint256,uint256,address,address)'(
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>
  }

  createChallenge(
    _resultReceiver: string,
    _executionHash: BytesLike,
    _maxMessageCount: BigNumberish,
    _asserter: string,
    _challenger: string,
    _asserterTimeLeft: BigNumberish,
    _challengerTimeLeft: BigNumberish,
    _sequencerBridge: string,
    _delayedBridge: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'createChallenge(address,bytes32,uint256,address,address,uint256,uint256,address,address)'(
    _resultReceiver: string,
    _executionHash: BytesLike,
    _maxMessageCount: BigNumberish,
    _asserter: string,
    _challenger: string,
    _asserterTimeLeft: BigNumberish,
    _challengerTimeLeft: BigNumberish,
    _sequencerBridge: string,
    _delayedBridge: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callStatic: {
    createChallenge(
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: CallOverrides
    ): Promise<string>

    'createChallenge(address,bytes32,uint256,address,address,uint256,uint256,address,address)'(
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: CallOverrides
    ): Promise<string>
  }

  filters: {}

  estimateGas: {
    createChallenge(
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    'createChallenge(address,bytes32,uint256,address,address,uint256,uint256,address,address)'(
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: Overrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    createChallenge(
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'createChallenge(address,bytes32,uint256,address,address,uint256,uint256,address,address)'(
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>
  }
}