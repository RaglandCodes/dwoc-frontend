/**
 * @flow
 * @relayHash 0854f30f3ee7f1e9273e3148ada2b840
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type roles = "Admin" | "Dev" | "Mentor" | "%future added value";
export type ProposalWhereInput = {|
  id?: ?string,
  user?: ?UserWhereInput,
  project?: ?ProjectWhereInput,
  isAccepted?: ?boolean,
  propUrl?: ?string,
|};
export type UserWhereInput = {|
  id?: ?string,
  firstName?: ?string,
  lastName?: ?string,
  role?: ?roles,
  email?: ?string,
  mobileNumber?: ?string,
  githubHandle?: ?string,
  password?: ?string,
  isVerified?: ?boolean,
  session?: ?string,
|};
export type ProjectWhereInput = {|
  id?: ?string,
  organization?: ?OrganizationWhereInput,
  projName?: ?string,
  projSlug?: ?string,
  projDesc?: ?string,
  githubUrl?: ?string,
|};
export type OrganizationWhereInput = {|
  id?: ?string,
  orgName?: ?string,
  orgSlug?: ?string,
  orgDesc?: ?string,
  githubUrl?: ?string,
|};
export type LandingPageQueryVariables = {|
  userId?: ?ProposalWhereInput
|};
export type LandingPageQueryResponse = {|
  +proposals: $ReadOnlyArray<?{|
    +id: string
  |}>
|};
export type LandingPageQuery = {|
  variables: LandingPageQueryVariables,
  response: LandingPageQueryResponse,
|};
*/


/*
query LandingPageQuery(
  $userId: ProposalWhereInput
) {
  proposals(where: $userId) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "ProposalWhereInput",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "proposals",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "where",
        "variableName": "userId"
      }
    ],
    "concreteType": "Proposal",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LandingPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "LandingPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "LandingPageQuery",
    "id": null,
    "text": "query LandingPageQuery(\n  $userId: ProposalWhereInput\n) {\n  proposals(where: $userId) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8dd0b118a13a8a3cc55d29ebf659a194';
module.exports = node;
