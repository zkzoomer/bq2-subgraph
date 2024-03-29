// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CredentialInvalidated extends ethereum.Event {
  get params(): CredentialInvalidated__Params {
    return new CredentialInvalidated__Params(this);
  }
}

export class CredentialInvalidated__Params {
  _event: CredentialInvalidated;

  constructor(event: CredentialInvalidated) {
    this._event = event;
  }

  get credentialId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class CredentialMemberRemoved extends ethereum.Event {
  get params(): CredentialMemberRemoved__Params {
    return new CredentialMemberRemoved__Params(this);
  }
}

export class CredentialMemberRemoved__Params {
  _event: CredentialMemberRemoved;

  constructor(event: CredentialMemberRemoved) {
    this._event = event;
  }

  get credentialId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get credentialsTreeIndex(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get identityCommitment(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get credentialsTreeRoot(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class CredentialMemberUpdated extends ethereum.Event {
  get params(): CredentialMemberUpdated__Params {
    return new CredentialMemberUpdated__Params(this);
  }
}

export class CredentialMemberUpdated__Params {
  _event: CredentialMemberUpdated;

  constructor(event: CredentialMemberUpdated) {
    this._event = event;
  }

  get credentialId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get credentialsTreeIndex(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get identityCommitment(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get newIdentityCommitment(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get credentialsTreeRoot(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class CredentialsMemberAdded extends ethereum.Event {
  get params(): CredentialsMemberAdded__Params {
    return new CredentialsMemberAdded__Params(this);
  }
}

export class CredentialsMemberAdded__Params {
  _event: CredentialsMemberAdded;

  constructor(event: CredentialsMemberAdded) {
    this._event = event;
  }

  get credentialId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get index(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get identityCommitment(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get credentialsTreeRoot(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class GradeMemberAdded extends ethereum.Event {
  get params(): GradeMemberAdded__Params {
    return new GradeMemberAdded__Params(this);
  }
}

export class GradeMemberAdded__Params {
  _event: GradeMemberAdded;

  constructor(event: GradeMemberAdded) {
    this._event = event;
  }

  get credentialId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get index(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get gradeCommitment(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get gradeTreeRoot(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class GradeMemberRemoved extends ethereum.Event {
  get params(): GradeMemberRemoved__Params {
    return new GradeMemberRemoved__Params(this);
  }
}

export class GradeMemberRemoved__Params {
  _event: GradeMemberRemoved;

  constructor(event: GradeMemberRemoved) {
    this._event = event;
  }

  get credentialId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get gradeTreeIndex(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get gradeCommitment(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get gradeTreeRoot(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class GradeMemberUpdated extends ethereum.Event {
  get params(): GradeMemberUpdated__Params {
    return new GradeMemberUpdated__Params(this);
  }
}

export class GradeMemberUpdated__Params {
  _event: GradeMemberUpdated;

  constructor(event: GradeMemberUpdated) {
    this._event = event;
  }

  get credentialId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get gradeTreeIndex(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get gradeCommitment(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get newGradeCommitment(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get gradeTreeRoot(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class NoCredentialMemberRemoved extends ethereum.Event {
  get params(): NoCredentialMemberRemoved__Params {
    return new NoCredentialMemberRemoved__Params(this);
  }
}

export class NoCredentialMemberRemoved__Params {
  _event: NoCredentialMemberRemoved;

  constructor(event: NoCredentialMemberRemoved) {
    this._event = event;
  }

  get credentialId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get noCredentialsTreeIndex(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get identityCommitment(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get noCredentialsTreeRoot(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class NoCredentialMemberUpdated extends ethereum.Event {
  get params(): NoCredentialMemberUpdated__Params {
    return new NoCredentialMemberUpdated__Params(this);
  }
}

export class NoCredentialMemberUpdated__Params {
  _event: NoCredentialMemberUpdated;

  constructor(event: NoCredentialMemberUpdated) {
    this._event = event;
  }

  get credentialId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get noCredentialsTreeIndex(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get identityCommitment(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get newIdentityCommitment(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get noCredentialsTreeRoot(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class NoCredentialsMemberAdded extends ethereum.Event {
  get params(): NoCredentialsMemberAdded__Params {
    return new NoCredentialsMemberAdded__Params(this);
  }
}

export class NoCredentialsMemberAdded__Params {
  _event: NoCredentialsMemberAdded;

  constructor(event: NoCredentialsMemberAdded) {
    this._event = event;
  }

  get credentialId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get index(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get identityCommitment(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get noCredentialsTreeRoot(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class TestCredentialManager__createCredentialResultValue0Struct extends ethereum.Tuple {
  get gradeTreeIndex(): BigInt {
    return this[0].toBigInt();
  }

  get credentialsTreeIndex(): BigInt {
    return this[1].toBigInt();
  }

  get noCredentialsTreeIndex(): BigInt {
    return this[2].toBigInt();
  }

  get gradeTreeRoot(): BigInt {
    return this[3].toBigInt();
  }

  get credentialsTreeRoot(): BigInt {
    return this[4].toBigInt();
  }

  get noCredentialsTreeRoot(): BigInt {
    return this[5].toBigInt();
  }
}

export class TestCredentialManager__testCredentialsResult {
  value0: i32;
  value1: i32;
  value2: i32;
  value3: i32;
  value4: BigInt;
  value5: Address;
  value6: BigInt;
  value7: BigInt;
  value8: BigInt;
  value9: BigInt;

  constructor(
    value0: i32,
    value1: i32,
    value2: i32,
    value3: i32,
    value4: BigInt,
    value5: Address,
    value6: BigInt,
    value7: BigInt,
    value8: BigInt,
    value9: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0))
    );
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1))
    );
    map.set(
      "value2",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value2))
    );
    map.set(
      "value3",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value3))
    );
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    map.set("value9", ethereum.Value.fromUnsignedBigInt(this.value9));
    return map;
  }

  getTestHeight(): i32 {
    return this.value0;
  }

  getMinimumGrade(): i32 {
    return this.value1;
  }

  getMultipleChoiceWeight(): i32 {
    return this.value2;
  }

  getNQuestions(): i32 {
    return this.value3;
  }

  getTimeLimit(): BigInt {
    return this.value4;
  }

  getAdmin(): Address {
    return this.value5;
  }

  getRequiredCredential(): BigInt {
    return this.value6;
  }

  getRequiredCredentialGradeThreshold(): BigInt {
    return this.value7;
  }

  getMultipleChoiceRoot(): BigInt {
    return this.value8;
  }

  getOpenAnswersHashesRoot(): BigInt {
    return this.value9;
  }
}

export class TestCredentialManager__testCredentialsHashesResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getTestRoot(): BigInt {
    return this.value0;
  }

  getTestParameters(): BigInt {
    return this.value1;
  }

  getNonPassingTestParameters(): BigInt {
    return this.value2;
  }
}

export class TestCredentialManager__updateCredentialResultNewCredentialStateStruct extends ethereum.Tuple {
  get gradeTreeIndex(): BigInt {
    return this[0].toBigInt();
  }

  get credentialsTreeIndex(): BigInt {
    return this[1].toBigInt();
  }

  get noCredentialsTreeIndex(): BigInt {
    return this[2].toBigInt();
  }

  get gradeTreeRoot(): BigInt {
    return this[3].toBigInt();
  }

  get credentialsTreeRoot(): BigInt {
    return this[4].toBigInt();
  }

  get noCredentialsTreeRoot(): BigInt {
    return this[5].toBigInt();
  }
}

export class TestCredentialManager__updateCredentialInputCredentialStateStruct extends ethereum.Tuple {
  get gradeTreeIndex(): BigInt {
    return this[0].toBigInt();
  }

  get credentialsTreeIndex(): BigInt {
    return this[1].toBigInt();
  }

  get noCredentialsTreeIndex(): BigInt {
    return this[2].toBigInt();
  }

  get gradeTreeRoot(): BigInt {
    return this[3].toBigInt();
  }

  get credentialsTreeRoot(): BigInt {
    return this[4].toBigInt();
  }

  get noCredentialsTreeRoot(): BigInt {
    return this[5].toBigInt();
  }
}

export class TestCredentialManager extends ethereum.SmartContract {
  static bind(address: Address): TestCredentialManager {
    return new TestCredentialManager("TestCredentialManager", address);
  }

  createCredential(
    credentialId: BigInt,
    treeDepth: BigInt,
    credentialData: Bytes
  ): TestCredentialManager__createCredentialResultValue0Struct {
    let result = super.call(
      "createCredential",
      "createCredential(uint256,uint256,bytes):((uint80,uint80,uint80,uint256,uint256,uint256))",
      [
        ethereum.Value.fromUnsignedBigInt(credentialId),
        ethereum.Value.fromUnsignedBigInt(treeDepth),
        ethereum.Value.fromBytes(credentialData)
      ]
    );

    return changetype<
      TestCredentialManager__createCredentialResultValue0Struct
    >(result[0].toTuple());
  }

  try_createCredential(
    credentialId: BigInt,
    treeDepth: BigInt,
    credentialData: Bytes
  ): ethereum.CallResult<
    TestCredentialManager__createCredentialResultValue0Struct
  > {
    let result = super.tryCall(
      "createCredential",
      "createCredential(uint256,uint256,bytes):((uint80,uint80,uint80,uint256,uint256,uint256))",
      [
        ethereum.Value.fromUnsignedBigInt(credentialId),
        ethereum.Value.fromUnsignedBigInt(treeDepth),
        ethereum.Value.fromBytes(credentialData)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<TestCredentialManager__createCredentialResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  credentialExists(credentialId: BigInt): boolean {
    let result = super.call(
      "credentialExists",
      "credentialExists(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(credentialId)]
    );

    return result[0].toBoolean();
  }

  try_credentialExists(credentialId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "credentialExists",
      "credentialExists(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(credentialId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  credentialIsValid(credentialId: BigInt): boolean {
    let result = super.call(
      "credentialIsValid",
      "credentialIsValid(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(credentialId)]
    );

    return result[0].toBoolean();
  }

  try_credentialIsValid(credentialId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "credentialIsValid",
      "credentialIsValid(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(credentialId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  credentialsRegistry(): Address {
    let result = super.call(
      "credentialsRegistry",
      "credentialsRegistry():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_credentialsRegistry(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "credentialsRegistry",
      "credentialsRegistry():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getCredentialAdmin(credentialId: BigInt): Address {
    let result = super.call(
      "getCredentialAdmin",
      "getCredentialAdmin(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(credentialId)]
    );

    return result[0].toAddress();
  }

  try_getCredentialAdmin(credentialId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getCredentialAdmin",
      "getCredentialAdmin(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(credentialId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getCredentialData(credentialId: BigInt): Bytes {
    let result = super.call(
      "getCredentialData",
      "getCredentialData(uint256):(bytes)",
      [ethereum.Value.fromUnsignedBigInt(credentialId)]
    );

    return result[0].toBytes();
  }

  try_getCredentialData(credentialId: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getCredentialData",
      "getCredentialData(uint256):(bytes)",
      [ethereum.Value.fromUnsignedBigInt(credentialId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  testCredentials(
    param0: BigInt
  ): TestCredentialManager__testCredentialsResult {
    let result = super.call(
      "testCredentials",
      "testCredentials(uint256):(uint8,uint8,uint8,uint8,uint32,address,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new TestCredentialManager__testCredentialsResult(
      result[0].toI32(),
      result[1].toI32(),
      result[2].toI32(),
      result[3].toI32(),
      result[4].toBigInt(),
      result[5].toAddress(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBigInt(),
      result[9].toBigInt()
    );
  }

  try_testCredentials(
    param0: BigInt
  ): ethereum.CallResult<TestCredentialManager__testCredentialsResult> {
    let result = super.tryCall(
      "testCredentials",
      "testCredentials(uint256):(uint8,uint8,uint8,uint8,uint32,address,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TestCredentialManager__testCredentialsResult(
        value[0].toI32(),
        value[1].toI32(),
        value[2].toI32(),
        value[3].toI32(),
        value[4].toBigInt(),
        value[5].toAddress(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBigInt(),
        value[9].toBigInt()
      )
    );
  }

  testCredentialsHashes(
    param0: BigInt
  ): TestCredentialManager__testCredentialsHashesResult {
    let result = super.call(
      "testCredentialsHashes",
      "testCredentialsHashes(uint256):(uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new TestCredentialManager__testCredentialsHashesResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_testCredentialsHashes(
    param0: BigInt
  ): ethereum.CallResult<TestCredentialManager__testCredentialsHashesResult> {
    let result = super.tryCall(
      "testCredentialsHashes",
      "testCredentialsHashes(uint256):(uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TestCredentialManager__testCredentialsHashesResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  testVerifier(): Address {
    let result = super.call("testVerifier", "testVerifier():(address)", []);

    return result[0].toAddress();
  }

  try_testVerifier(): ethereum.CallResult<Address> {
    let result = super.tryCall("testVerifier", "testVerifier():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  updateCredential(
    credentialId: BigInt,
    credentialState: TestCredentialManager__updateCredentialInputCredentialStateStruct,
    credentialUpdate: Bytes
  ): TestCredentialManager__updateCredentialResultNewCredentialStateStruct {
    let result = super.call(
      "updateCredential",
      "updateCredential(uint256,(uint80,uint80,uint80,uint256,uint256,uint256),bytes):((uint80,uint80,uint80,uint256,uint256,uint256))",
      [
        ethereum.Value.fromUnsignedBigInt(credentialId),
        ethereum.Value.fromTuple(credentialState),
        ethereum.Value.fromBytes(credentialUpdate)
      ]
    );

    return changetype<
      TestCredentialManager__updateCredentialResultNewCredentialStateStruct
    >(result[0].toTuple());
  }

  try_updateCredential(
    credentialId: BigInt,
    credentialState: TestCredentialManager__updateCredentialInputCredentialStateStruct,
    credentialUpdate: Bytes
  ): ethereum.CallResult<
    TestCredentialManager__updateCredentialResultNewCredentialStateStruct
  > {
    let result = super.tryCall(
      "updateCredential",
      "updateCredential(uint256,(uint80,uint80,uint80,uint256,uint256,uint256),bytes):((uint80,uint80,uint80,uint256,uint256,uint256))",
      [
        ethereum.Value.fromUnsignedBigInt(credentialId),
        ethereum.Value.fromTuple(credentialState),
        ethereum.Value.fromBytes(credentialUpdate)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<
        TestCredentialManager__updateCredentialResultNewCredentialStateStruct
      >(value[0].toTuple())
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get credentialsRegistryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get testVerifierAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateCredentialCall extends ethereum.Call {
  get inputs(): CreateCredentialCall__Inputs {
    return new CreateCredentialCall__Inputs(this);
  }

  get outputs(): CreateCredentialCall__Outputs {
    return new CreateCredentialCall__Outputs(this);
  }
}

export class CreateCredentialCall__Inputs {
  _call: CreateCredentialCall;

  constructor(call: CreateCredentialCall) {
    this._call = call;
  }

  get credentialId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get treeDepth(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get credentialData(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class CreateCredentialCall__Outputs {
  _call: CreateCredentialCall;

  constructor(call: CreateCredentialCall) {
    this._call = call;
  }

  get value0(): CreateCredentialCallValue0Struct {
    return changetype<CreateCredentialCallValue0Struct>(
      this._call.outputValues[0].value.toTuple()
    );
  }
}

export class CreateCredentialCallValue0Struct extends ethereum.Tuple {
  get gradeTreeIndex(): BigInt {
    return this[0].toBigInt();
  }

  get credentialsTreeIndex(): BigInt {
    return this[1].toBigInt();
  }

  get noCredentialsTreeIndex(): BigInt {
    return this[2].toBigInt();
  }

  get gradeTreeRoot(): BigInt {
    return this[3].toBigInt();
  }

  get credentialsTreeRoot(): BigInt {
    return this[4].toBigInt();
  }

  get noCredentialsTreeRoot(): BigInt {
    return this[5].toBigInt();
  }
}

export class InvalidateCredentialCall extends ethereum.Call {
  get inputs(): InvalidateCredentialCall__Inputs {
    return new InvalidateCredentialCall__Inputs(this);
  }

  get outputs(): InvalidateCredentialCall__Outputs {
    return new InvalidateCredentialCall__Outputs(this);
  }
}

export class InvalidateCredentialCall__Inputs {
  _call: InvalidateCredentialCall;

  constructor(call: InvalidateCredentialCall) {
    this._call = call;
  }

  get credentialId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class InvalidateCredentialCall__Outputs {
  _call: InvalidateCredentialCall;

  constructor(call: InvalidateCredentialCall) {
    this._call = call;
  }
}

export class UpdateCredentialCall extends ethereum.Call {
  get inputs(): UpdateCredentialCall__Inputs {
    return new UpdateCredentialCall__Inputs(this);
  }

  get outputs(): UpdateCredentialCall__Outputs {
    return new UpdateCredentialCall__Outputs(this);
  }
}

export class UpdateCredentialCall__Inputs {
  _call: UpdateCredentialCall;

  constructor(call: UpdateCredentialCall) {
    this._call = call;
  }

  get credentialId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get credentialState(): UpdateCredentialCallCredentialStateStruct {
    return changetype<UpdateCredentialCallCredentialStateStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }

  get credentialUpdate(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class UpdateCredentialCall__Outputs {
  _call: UpdateCredentialCall;

  constructor(call: UpdateCredentialCall) {
    this._call = call;
  }

  get newCredentialState(): UpdateCredentialCallNewCredentialStateStruct {
    return changetype<UpdateCredentialCallNewCredentialStateStruct>(
      this._call.outputValues[0].value.toTuple()
    );
  }
}

export class UpdateCredentialCallCredentialStateStruct extends ethereum.Tuple {
  get gradeTreeIndex(): BigInt {
    return this[0].toBigInt();
  }

  get credentialsTreeIndex(): BigInt {
    return this[1].toBigInt();
  }

  get noCredentialsTreeIndex(): BigInt {
    return this[2].toBigInt();
  }

  get gradeTreeRoot(): BigInt {
    return this[3].toBigInt();
  }

  get credentialsTreeRoot(): BigInt {
    return this[4].toBigInt();
  }

  get noCredentialsTreeRoot(): BigInt {
    return this[5].toBigInt();
  }
}

export class UpdateCredentialCallNewCredentialStateStruct extends ethereum.Tuple {
  get gradeTreeIndex(): BigInt {
    return this[0].toBigInt();
  }

  get credentialsTreeIndex(): BigInt {
    return this[1].toBigInt();
  }

  get noCredentialsTreeIndex(): BigInt {
    return this[2].toBigInt();
  }

  get gradeTreeRoot(): BigInt {
    return this[3].toBigInt();
  }

  get credentialsTreeRoot(): BigInt {
    return this[4].toBigInt();
  }

  get noCredentialsTreeRoot(): BigInt {
    return this[5].toBigInt();
  }
}
