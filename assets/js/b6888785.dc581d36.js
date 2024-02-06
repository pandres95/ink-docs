"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6820],{37336:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(17624),s=t(4552);const r={title:"#[ink::chain_extension]",slug:"/macros-attributes/chain-extension",hide_title:!0},o=void 0,a={id:"macros-attributes/chain-extension",title:"#[ink::chain_extension]",description:"In the default configuration of the contracts-pallet a smart contract can only interact with the runtime",source:"@site/versioned_docs/version-5.x/macros-attributes/chain-extension.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/chain-extension",permalink:"/5.x/macros-attributes/chain-extension",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/macros-attributes/chain-extension.md",tags:[],version:"5.x",frontMatter:{title:"#[ink::chain_extension]",slug:"/macros-attributes/chain-extension",hide_title:!0},sidebar:"reference",previous:{title:"#[ink(topic)]",permalink:"/5.x/macros-attributes/topic"},next:{title:"Overview",permalink:"/5.x/datastructures/overview"}},c={},l=[{value:"Structure",id:"structure",level:2},{value:"Usage",id:"usage",level:2},{value:"Macro Attributes",id:"macro-attributes",level:2},{value:"Method Attributes",id:"method-attributes",level:2},{value:"Details: <code>handle_status</code>",id:"details-handle_status",level:2},{value:"Usage: <code>handle_status</code> + <code>Result&lt;T, E&gt;</code> return type",id:"usage-handle_status--resultt-e-return-type",level:2},{value:"Combinations",id:"combinations",level:2},{value:"Error Code",id:"error-code",level:2},{value:"Example: Definition",id:"example-definition",level:2},{value:"Example: Environment",id:"example-environment",level:2},{value:"Example: Usage",id:"example-usage",level:2},{value:"Using Multiple Chain Extensions",id:"using-multiple-chain-extensions",level:2},{value:"Mocking Chain Extension",id:"mocking-chain-extension",level:2},{value:"Technical Limitations",id:"technical-limitations",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",div:"div",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{src:"/img/title/text/chain-ext.svg",className:"titlePic"}),"\n",(0,i.jsxs)(n.p,{children:["In the default configuration of the ",(0,i.jsx)(n.code,{children:"contracts-pallet"})," a smart contract can only interact with the runtime\nvia its well defined set of basic smart contract interface functions. This API already allows a whole variety of\ninteraction between the ",(0,i.jsx)(n.code,{children:"contracts-pallet"})," and the executed smart contract. For example it is possible\nto call and instantiate other smart contracts on the same chain, emit events, query context information\nor run built-in cryptographic hashing procedures."]}),"\n",(0,i.jsx)(n.p,{children:"If this basic set of features is not enough for a particular Substrate built blockchain it is possible\nto easily extend this API using the so-called chain extension feature."}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:"/img/venn.png",width:"50%"})}),"\n",(0,i.jsx)(n.p,{children:"With chain extensions you can expose parts of your runtime logic\nto smart contract developers."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The ink! examples repository contains ",(0,i.jsxs)(n.a,{href:"https://github.com/paritytech/ink-examples/tree/main/rand-extension",children:["the ",(0,i.jsx)(n.code,{children:"rand-extension"})," example"]}),".\nThis is a complete example of a chain extension implemented in both ink! and Substrate."]})}),"\n",(0,i.jsx)(n.h2,{id:"structure",children:"Structure"}),"\n",(0,i.jsx)(n.p,{children:"The interface consists of an error code that indicates lightweight errors\nas well as the definition of some chain extension methods."}),"\n",(0,i.jsx)(n.p,{children:"The overall structure follows that of a simple Rust trait definition.\nThe error code is defined as an associated type definition of the trait definition.\nThe methods are defined as associated trait methods without implementation."}),"\n",(0,i.jsxs)(n.p,{children:["Chain extension methods must not have a ",(0,i.jsx)(n.code,{children:"self"})," receiver such as ",(0,i.jsx)(n.code,{children:"&self"})," or ",(0,i.jsx)(n.code,{children:"&mut self"}),"\nand must have inputs and output that implement SCALE codec. Their return value follows\nspecific rules that can be altered using the ",(0,i.jsx)(n.code,{children:"handle_status"})," attribute and\nalternation between  ",(0,i.jsx)(n.code,{children:"Result"})," and Non-",(0,i.jsx)(n.code,{children:"Result"})," types which are described in more detail below."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.p,{children:"Usually the chain extension definition using this proc. macro is provided\nby the author of the chain extension in a separate crate.\nink! smart contracts using this chain extension simply depend on this crate\nand use its associated environment definition in order to make use of\nthe methods provided by the chain extension."}),"\n",(0,i.jsx)(n.h2,{id:"macro-attributes",children:"Macro Attributes"}),"\n",(0,i.jsxs)(n.p,{children:["The macro supports only one required argument: ",(0,i.jsx)(n.code,{children:"extension = N: u16"}),".\nThe runtime may have several chain extensions at the same time. The ",(0,i.jsx)(n.code,{children:"extension"}),"\nidentifier points to the corresponding chain extension in the runtime.\nThe value should be the same as during the definition of the chain extension.\nYou can consult the\n",(0,i.jsx)(n.a,{href:"https://paritytech.github.io/polkadot-sdk/master/pallet_contracts/chain_extension/index.html",children:"chain extension module documentation"}),"\nif you are unsure how to find the chain extension code.\nOtherwise, you should consult the target chain's documentation\nfor specifications of any chain extensions it exposes."]}),"\n",(0,i.jsx)(n.div,{children:(0,i.jsxs)(n.p,{children:["If the chain extension is not used in a tuple in the runtime configuration,\n",(0,i.jsx)(n.code,{children:"extension = N: u16"})," can take any ",(0,i.jsx)(n.code,{children:"u16"})," number."]})}),"\n",(0,i.jsx)(n.h2,{id:"method-attributes",children:"Method Attributes"}),"\n",(0,i.jsx)(n.p,{children:"There are two different attributes with which the chain extension methods\ncan be flagged:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Attribute"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Default Value"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"ink(function = N: u16)"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Determines the unique function ID within the chain extension."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"ink(handle_status = flag: bool)"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Optional"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Assumes that the returned status code of the chain extension method always indicates success and therefore always loads and decodes the output buffer of the call."})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"As with all ink! attributes multiple of them can either appear in a contiguous list:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"type Access = i32;\n\n#[ink::chain_extension(extension = 12)]\npub trait MyChainExtension {\n    type ErrorCode = i32;\n\n    #[ink(function = 5, handle_status = false)]\n    fn key_access_for_account(key: &[u8], account: &[u8]) -> Access;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u2026or as multiple standalone ink! attributes applied to the same item:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"type Access = i32;\n\n#[ink::chain_extension(extension = 12)]\npub trait MyChainExtension {\n  type ErrorCode = i32;\n\n  #[ink(function = 5)]\n  #[ink(handle_status = false)]\n  fn key_access_for_account(key: &[u8], account: &[u8]) -> Access;\n}\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"details-handle_status",children:["Details: ",(0,i.jsx)(n.code,{children:"handle_status"})]}),"\n",(0,i.jsxs)(n.p,{children:["Default value: ",(0,i.jsx)(n.code,{children:"true"})]}),"\n",(0,i.jsxs)(n.p,{children:["By default all chain extension methods should return a ",(0,i.jsx)(n.code,{children:"Result<T, E>"})," where ",(0,i.jsx)(n.code,{children:"E: From<Self::ErrorCode>"}),".\nThe ",(0,i.jsx)(n.code,{children:"Self::ErrorCode"})," represents the error code of the chain extension.\nThis means that a smart contract calling such a chain extension method first queries the returned\nstatus code of the chain extension method and only loads and decodes the output if the returned\nstatus code indicates a successful call.\nThis design was chosen as it is more efficient when no output besides the error\ncode is required for a chain extension call. When designing a chain extension try to utilize the\nerror code to return errors and only use the output buffer for information that does not fit in\na single ",(0,i.jsx)(n.code,{children:"u32"})," value."]}),"\n",(0,i.jsxs)(n.p,{children:["A chain extension method that is flagged with ",(0,i.jsx)(n.code,{children:"handle_status = false"})," assumes that the returned error code\nwill always indicate success. Therefore it will always load and decode the output buffer and loses\nthe ",(0,i.jsx)(n.code,{children:"E: From<Self::ErrorCode"})," constraint for the call."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that if a chain extension method does not return ",(0,i.jsx)(n.code,{children:"Result<T, E>"})," where ",(0,i.jsx)(n.code,{children:"E: From<Self::ErrorCode>"}),",\nbut ",(0,i.jsx)(n.code,{children:"handle_status = true"})," it will still return a value of type ",(0,i.jsx)(n.code,{children:"Result<T, Self::ErrorCode>"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"usage-handle_status--resultt-e-return-type",children:["Usage: ",(0,i.jsx)(n.code,{children:"handle_status"})," + ",(0,i.jsx)(n.code,{children:"Result<T, E>"})," return type"]}),"\n",(0,i.jsxs)(n.p,{children:["Use both ",(0,i.jsx)(n.code,{children:"handle_status = false"})," and non-",(0,i.jsx)(n.code,{children:"Result"})," return type for the same chain extension method\nif a call to it may never fail and never returns a ",(0,i.jsx)(n.code,{children:"Result"})," type."]}),"\n",(0,i.jsx)(n.h2,{id:"combinations",children:"Combinations"}),"\n",(0,i.jsxs)(n.p,{children:["Due to the possibility to flag a chain extension method with ",(0,i.jsx)(n.code,{children:"handle_status"})," and either (1) return ",(0,i.jsx)(n.code,{children:"Result<T, E>"}),"\nor (2) return just ",(0,i.jsx)(n.code,{children:"T"}),"\nthere are 4 different cases with slightly varying semantics:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"handle_status"})}),(0,i.jsxs)(n.th,{style:{textAlign:"center"},children:["Returns ",(0,i.jsx)(n.code,{children:"Result<T, E>"})]}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Effects"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["The chain extension method is required to return a value of type ",(0,i.jsx)(n.code,{children:"Result<T, E>"})," where ",(0,i.jsx)(n.code,{children:"E: From<Self::ErrorCode>"}),". A call will always check if the returned status code indicates success and only then will load and decode the value in the output buffer."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["The chain extension method may return any non-",(0,i.jsx)(n.code,{children:"Result"})," type. A call will always check if the returned status code indicates success and only then will load and decode the value in the output buffer. The actual return type of the chain extension method is still ",(0,i.jsx)(n.code,{children:"Result<T, Self::ErrorCode>"})," when the chain extension method was defined to return a value of type ",(0,i.jsx)(n.code,{children:"T"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["The chain extension method is required to return a value of type ",(0,i.jsx)(n.code,{children:"Result<T, E>"}),". A call will always assume that the returned status code indicates success and therefore always load and decode the output buffer directly."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["The chain extension method may return any non-",(0,i.jsx)(n.code,{children:"Result"})," type. A call will always assume that the returned status code indicates success and therefore always load and decode the output buffer directly."]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"error-code",children:"Error Code"}),"\n",(0,i.jsxs)(n.p,{children:["Every chain extension defines exactly one ",(0,i.jsx)(n.code,{children:"ErrorCode"})," using the following syntax:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink::chain_extension]\npub trait MyChainExtension {\n    type ErrorCode = MyErrorCode;\n\n    // more definitions ...\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The defined ",(0,i.jsx)(n.code,{children:"ErrorCode"})," must implement ",(0,i.jsx)(n.code,{children:"FromStatusCode"})," which should be implemented as a\nmore or less trivial conversion from the ",(0,i.jsx)(n.code,{children:"u32"})," status code to a ",(0,i.jsx)(n.code,{children:"Result<(), Self::ErrorCode>"}),".\nThe ",(0,i.jsx)(n.code,{children:"Ok(())"})," value indicates that the call to the chain extension method was successful."]}),"\n",(0,i.jsxs)(n.p,{children:["By convention an error code of ",(0,i.jsx)(n.code,{children:"0"})," represents success.\nHowever, chain extension authors may use whatever suits their needs."]}),"\n",(0,i.jsx)(n.h2,{id:"example-definition",children:"Example: Definition"}),"\n",(0,i.jsx)(n.p,{children:"In the below example a chain extension is defined that allows its users to read and write\nfrom and to the runtime storage using access privileges:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'/// Custom chain extension to read to and write from the runtime.\n#[ink::chain_extension(extension = 12)]\npub trait RuntimeReadWrite {\n    type ErrorCode = ReadWriteErrorCode;\n\n    /// Reads from runtime storage.\n    ///\n    /// # Note\n    ///\n    /// Actually returns a value of type `Result<Vec<u8>, Self::ErrorCode>`.\n    #[ink(function = 1, returns_result = false)]\n    fn read(key: &[u8]) -> Vec<u8>;\n\n    ///\n    /// Reads from runtime storage.\n    ///\n    /// Returns the number of bytes read and up to 32 bytes of the\n    /// read value. Unused bytes in the output are set to 0.\n    ///\n    /// # Errors\n    ///\n    /// If the runtime storage cell stores a value that requires more than\n    /// 32 bytes.\n    ///\n    /// # Note\n    ///\n    /// This requires `ReadWriteError` to implement `From<ReadWriteErrorCode>`\n    /// and may potentially return any `Self::ErrorCode` through its return value.\n    #[ink(function = 2)]\n    fn read_small(key: &[u8]) -> Result<(u32, [u8; 32]), ReadWriteError>;\n\n    /// Writes into runtime storage.\n    ///\n    /// # Note\n    ///\n    /// Actually returns a value of type `Result<(), Self::ErrorCode>`.\n    #[ink(function = 3)]\n    fn write(key: &[u8], value: &[u8]);\n\n    /// Returns the access allowed for the key for the caller.\n    ///\n    /// # Note\n    ///\n    /// Assumes to never fail the call and therefore always returns `Option<Access>`.\n    #[ink(function = 4, handle_status = false)]\n    fn access(key: &[u8]) -> Option<Access>;\n\n    /// Unlocks previously acquired permission to access key.\n    ///\n    /// # Errors\n    ///\n    /// If the permission was not granted.\n    ///\n    /// # Note\n    ///\n    /// Assumes the call to never fail and therefore does _NOT_ require `UnlockAccessError`\n    /// to implement `From<Self::ErrorCode>` as in the `read_small` method above.\n    #[ink(function = 5, handle_status = false)]\n    fn unlock_access(key: &[u8], access: Access) -> Result<(), UnlockAccessError>;\n}\n\n#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\npub enum ReadWriteErrorCode {\n  InvalidKey,\n  CannotWriteToKey,\n  CannotReadFromKey,\n}\n\n#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\npub enum ReadWriteError {\n  ErrorCode(ReadWriteErrorCode),\n  BufferTooSmall { required_bytes: u32 },\n}\n\nimpl From<ReadWriteErrorCode> for ReadWriteError {\n  fn from(error_code: ReadWriteErrorCode) -> Self {\n    Self::ErrorCode(error_code)\n  }\n}\n\nimpl From<scale::Error> for ReadWriteError {\n  fn from(_: scale::Error) -> Self {\n    panic!("encountered unexpected invalid SCALE encoding")\n  }\n}\n\n#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\npub struct UnlockAccessError {\n  reason: String,\n}\n\nimpl From<scale::Error> for UnlockAccessError {\n  fn from(_: scale::Error) -> Self {\n    panic!("encountered unexpected invalid SCALE encoding")\n  }\n}\n\n#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\npub enum Access {\n  ReadWrite,\n  ReadOnly,\n  WriteOnly,\n}\n\nimpl ink::env::chain_extension::FromStatusCode for ReadWriteErrorCode {\n  fn from_status_code(status_code: u32) -> Result<(), Self> {\n    match status_code {\n      0 => Ok(()),\n      1 => Err(Self::InvalidKey),\n      2 => Err(Self::CannotWriteToKey),\n      3 => Err(Self::CannotReadFromKey),\n      _ => panic!("encountered unknown status code"),\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["All the error types and other utility types used in the chain extension definition\nabove are often required to implement various traits such as SCALE's ",(0,i.jsx)(n.code,{children:"Encode"})," and ",(0,i.jsx)(n.code,{children:"Decode"}),"\nas well as ",(0,i.jsx)(n.code,{children:"scale-info"}),"'s ",(0,i.jsx)(n.code,{children:"TypeInfo"})," trait."]}),"\n",(0,i.jsxs)(n.p,{children:["A full example of the above chain extension definition can be seen\n",(0,i.jsx)(n.a,{href:"https://github.com/paritytech/ink/blob/017f71d60799b764425334f86b732cc7b7065fe6/crates/lang/macro/tests/ui/chain_extension/simple.rs",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"example-environment",children:"Example: Environment"}),"\n",(0,i.jsxs)(n.p,{children:["In order to allow ink! smart contracts to use the above defined chain extension it needs\nto be integrated into an ",(0,i.jsx)(n.code,{children:"Environment"})," definition as shown below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"type RuntimeReadWrite = i32;\n\nuse ink::env::{Environment, DefaultEnvironment};\n\npub enum CustomEnvironment {}\n\nimpl Environment for CustomEnvironment {\n    const MAX_EVENT_TOPICS: usize =\n        <DefaultEnvironment as Environment>::MAX_EVENT_TOPICS;\n\n    type AccountId = <DefaultEnvironment as Environment>::AccountId;\n    type Balance = <DefaultEnvironment as Environment>::Balance;\n    type Hash = <DefaultEnvironment as Environment>::Hash;\n    type BlockNumber = <DefaultEnvironment as Environment>::BlockNumber;\n    type Timestamp = <DefaultEnvironment as Environment>::Timestamp;\n\n    type ChainExtension = RuntimeReadWrite;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Above we defined the ",(0,i.jsx)(n.code,{children:"CustomEnvironment"})," which defaults to ink!'s ",(0,i.jsx)(n.code,{children:"DefaultEnvironment"}),"\nfor all constants and types but the ",(0,i.jsx)(n.code,{children:"ChainExtension"})," type which is assigned to our newly\ndefined chain extension."]}),"\n",(0,i.jsx)(n.h2,{id:"example-usage",children:"Example: Usage"}),"\n",(0,i.jsxs)(n.p,{children:["An ink! smart contract can use the above defined chain extension through the ",(0,i.jsx)(n.code,{children:"Environment"}),"\ndefinition defined in the last example section using the ",(0,i.jsx)(n.code,{children:"env"})," macro parameter as\nshown below."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that chain extension methods are accessible through ",(0,i.jsx)(n.code,{children:"Self::extension()"})," or\n",(0,i.jsx)(n.code,{children:"self.extension()"}),". For example as in ",(0,i.jsx)(n.code,{children:"Self::extension().read(..)"})," or ",(0,i.jsx)(n.code,{children:"self.extension().read(..)"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'#[ink::contract(env = CustomEnvironment)]\nmod read_writer {\n\n    #[ink(storage)]\n    pub struct ReadWriter {}\n\n    impl ReadWriter {\n        #[ink(constructor)]\n        pub fn new() -> Self { Self {} }\n\n        #[ink(message)]\n        pub fn read(&self, key: Vec<u8>) -> Result<Vec<u8>, ReadWriteErrorCode> {\n            self.env()\n                .extension()\n                .read(&key)\n        }\n\n        #[ink(message)]\n        pub fn read_small(&self, key: Vec<u8>) -> Result<(u32, [u8; 32]), ReadWriteError> {\n            self.env()\n                .extension()\n                .read_small(&key)\n        }\n\n        #[ink(message)]\n        pub fn write(\n            &self,\n            key: Vec<u8>,\n            value: Vec<u8>,\n        ) -> Result<(), ReadWriteErrorCode> {\n            self.env()\n                .extension()\n                .write(&key, &value)\n        }\n\n        #[ink(message)]\n        pub fn access(&self, key: Vec<u8>) -> Option<Access> {\n            self.env()\n                .extension()\n                .access(&key)\n        }\n\n        #[ink(message)]\n        pub fn unlock_access(&self, key: Vec<u8>, access: Access) -> Result<(), UnlockAccessError> {\n            self.env()\n                .extension()\n                .unlock_access(&key, access)\n        }\n    }\n\n    /// Custom chain extension to read to and write from the runtime.\n    #[ink::chain_extension(extension = 12)]\n    pub trait RuntimeReadWrite {\n          type ErrorCode = ReadWriteErrorCode;\n          #[ink(function = 1)]\n          fn read(key: &[u8]) -> Vec<u8>;\n          #[ink(function = 2)]\n          fn read_small(key: &[u8]) -> Result<(u32, [u8; 32]), ReadWriteError>;\n          #[ink(function = 3)]\n          fn write(key: &[u8], value: &[u8]);\n          #[ink(function = 4, handle_status = false)]\n          fn access(key: &[u8]) -> Option<Access>;\n          #[ink(function = 5, handle_status = false)]\n          fn unlock_access(key: &[u8], access: Access) -> Result<(), UnlockAccessError>;\n    }\n\n    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\n    pub enum ReadWriteErrorCode {\n          InvalidKey,\n          CannotWriteToKey,\n          CannotReadFromKey,\n    }\n\n    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\n    pub enum ReadWriteError {\n          ErrorCode(ReadWriteErrorCode),\n          BufferTooSmall { required_bytes: u32 },\n    }\n    impl From<ReadWriteErrorCode> for ReadWriteError {\n         fn from(error_code: ReadWriteErrorCode) -> Self {\n             Self::ErrorCode(error_code)\n         }\n    }\n    impl From<scale::Error> for ReadWriteError {\n         fn from(_: scale::Error) -> Self {\n             panic!("encountered unexpected invalid SCALE encoding")\n         }\n    }\n\n    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\n    pub struct UnlockAccessError {\n         reason: String,\n    }\n    impl From<scale::Error> for UnlockAccessError {\n         fn from(_: scale::Error) -> Self {\n             panic!("encountered unexpected invalid SCALE encoding")\n         }\n    }\n    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\n    pub enum Access {\n         ReadWrite,\n         ReadOnly,\n         WriteOnly,\n    }\n    impl ink::env::chain_extension::FromStatusCode for ReadWriteErrorCode {\n         fn from_status_code(status_code: u32) -> Result<(), Self> {\n             match status_code {\n                 0 => Ok(()),\n                 1 => Err(Self::InvalidKey),\n                 2 => Err(Self::CannotWriteToKey),\n                 3 => Err(Self::CannotReadFromKey),\n                 _ => panic!("encountered unknown status code"),\n             }\n         }\n    }\n    pub enum CustomEnvironment {}\n    impl ink::env::Environment for CustomEnvironment {\n         const MAX_EVENT_TOPICS: usize =\n             <ink::env::DefaultEnvironment as ink::env::Environment>::MAX_EVENT_TOPICS;\n\n         type AccountId = <ink::env::DefaultEnvironment as ink::env::Environment>::AccountId;\n         type Balance = <ink::env::DefaultEnvironment as ink::env::Environment>::Balance;\n         type Hash = <ink::env::DefaultEnvironment as ink::env::Environment>::Hash;\n         type BlockNumber = <ink::env::DefaultEnvironment as ink::env::Environment>::BlockNumber;\n         type Timestamp = <ink::env::DefaultEnvironment as ink::env::Environment>::Timestamp;\n\n         type ChainExtension = RuntimeReadWrite;\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"using-multiple-chain-extensions",children:"Using Multiple Chain Extensions"}),"\n",(0,i.jsx)(n.p,{children:"It is possible to use multiple exposed chain extensions in the single environment of a smart contract.\nThe declaration procedure of the chain extension stays the same."}),"\n",(0,i.jsxs)(n.p,{children:["Suppose we want to combine two chain extension called ",(0,i.jsx)(n.code,{children:"Psp22Extension"})," and ",(0,i.jsx)(n.code,{children:"FetchRandom"}),", ink! provides\na useful macro ",(0,i.jsx)(n.a,{href:"https://docs.rs/ink/5.0.0-rc/ink/macro.combine_extensions.html",children:(0,i.jsx)(n.code,{children:"ink::combine_extensions!"})})," that allows to construct the structure combining\nthe aforementioned chain extensions like so:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"ink::combine_extensions! {\n    /// This extension combines the `FetchRandom` and `Psp22Extension` extensions.\n    /// It is possible to combine any number of extensions in this way.\n    ///\n    /// This structure is an instance that is returned by the `self.env().extension()` call.\n    pub struct CombinedChainExtension {\n        /// The instance of the `Psp22Extension` chain extension.\n        ///\n        /// It provides you access to `PSP22` functionality.\n        pub psp22: Psp22Extension,\n        /// The instance of the `FetchRandom` chain extension.\n        ///\n        /// It provides you access to randomness functionality.\n        pub rand: FetchRandom,\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The combined structure is called ",(0,i.jsx)(n.code,{children:"CombinedChainExtension"}),", and we can refer to it\nwhen specifying the chain extension type in ",(0,i.jsx)(n.code,{children:"Environment"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"type ChainExtension = CombinedChainExtension;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Each extension's method can be called by accessing it via the name of the field of ",(0,i.jsx)(n.code,{children:"CombineChainExtension"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"self.env().extension().rand.<method_name_in_rand_ext>()\n// or\nself.env().extension().psp22.<method_name_in_psp22_ext>()\n// e.g.\nself.env().extension().psp22.total_supply()\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The ink! repository contains the ",(0,i.jsx)(n.a,{href:"https://github.com/paritytech/ink/tree/master/integration-tests/combined-extension",children:"full example"})," illustrating how to combine existing chain extensions\nand mock them for testing."]})}),"\n",(0,i.jsx)(n.h2,{id:"mocking-chain-extension",children:"Mocking Chain Extension"}),"\n",(0,i.jsxs)(n.p,{children:["You can mock chain extensions for unit testing purposes.\nThis can be achieved by implementing the ",(0,i.jsx)(n.a,{href:"https://docs.rs/ink_env/latest/ink_env/test/trait.ChainExtension.html",children:(0,i.jsx)(n.code,{children:"ink::env::test::ChainExtension"})})," trait."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"/// Opaque structure\nstruct MockedPSP22Extension;\n\n// Implementing \nimpl ink::env::test::ChainExtension for MockedPSP22Extension {\n    fn ext_id(&self) -> u16 {\n        // It is identifier used by `psp22_extension::Psp22Extension` extension.\n        // Must be the same as the once specified in `#[ink::chain_extension(extension = _)]`\n        13\n    }\n\n    // Call dispatcher.\n    // Call specific code based on the function id which is dispatched from the contract/\n    fn call(&mut self, func_id: u16, _input: &[u8], output: &mut Vec<u8>) -> u32 {\n        match func_id {\n            // `func_id` of the `total_supply` function.\n            // must match `#[ink(function = _)]` of the corresponding method\n            0x162d => {\n                ink::scale::Encode::encode_to(&TOTAL_SUPPLY, output);\n                0\n            },\n            // Other functions\n            _ => {\n                1\n            }\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"technical-limitations",children:"Technical Limitations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Due to technical limitations it is not possible to refer to the ",(0,i.jsx)(n.code,{children:"ErrorCode"})," associated type\nusing ",(0,i.jsx)(n.code,{children:"Self::ErrorCode"})," anywhere within the chain extension and its defined methods.\nInstead chain extension authors should directly use the error code type when required.\nThis limitation might be lifted in future versions of ink!."]}),"\n",(0,i.jsx)(n.li,{children:"It is not possible to declare other chain extension traits as super traits or super\nchain extensions of another."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>o});var i=t(11504);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);