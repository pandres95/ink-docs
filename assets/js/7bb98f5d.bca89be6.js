"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5727],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),k=r,d=m["".concat(s,".").concat(k)]||m[k]||u[k]||i;return t?a.createElement(d,o(o({ref:n},p),{},{components:t})):a.createElement(d,o({ref:n},p))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8344:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={title:"#[ink::contract]",slug:"/macros-attributes/contract"},s=void 0,c={unversionedId:"macros-attributes/contract",id:"macros-attributes/contract",isDocsHomePage:!1,title:"#[ink::contract]",description:"This macro is the entry point for writing ink! smart contracts.",source:"@site/docs/macros-attributes/contract.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/contract",permalink:"/ink-docs/macros-attributes/contract",editUrl:"https://github.com/ink-docs/edit/master/docs/macros-attributes/contract.md",tags:[],version:"current",frontMatter:{title:"#[ink::contract]",slug:"/macros-attributes/contract"},sidebar:"reference",previous:{title:"Overview",permalink:"/ink-docs/macros-attributes"},next:{title:"#[ink(anonymous)]",permalink:"/ink-docs/macros-attributes/anonymous"}},p=[{value:"Header Arguments",id:"header-arguments",children:[{value:"<code>dynamic_storage_allocator: bool</code>",id:"dynamic_storage_allocator-bool",children:[]},{value:"<code>compile_as_dependency: bool</code>",id:"compile_as_dependency-bool",children:[]},{value:"<code>env: impl Environment</code>",id:"env-impl-environment",children:[]}]},{value:"Anaylsis",id:"anaylsis",children:[]},{value:"Interacting with the Contract Executor",id:"interacting-with-the-contract-executor",children:[]},{value:"Events",id:"events",children:[]},{value:"Example: Flipper",id:"example-flipper",children:[]}],u={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This macro is the entry point for writing ink! smart contracts."),(0,i.kt)("p",null,"If you are a beginner trying to learn ink! we recommend you to check out\nour extensive ",(0,i.kt)("a",{parentName:"p",href:"https://substrate.dev/substrate-contracts-workshop/#/"},"ink! workshop"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," In all below examples we will be using ",(0,i.kt)("inlineCode",{parentName:"p"},"ink_lang")," crate aliased as just ",(0,i.kt)("inlineCode",{parentName:"p"},"ink"),".\nYou can do this yourself by adding the following line to your code:\n",(0,i.kt)("inlineCode",{parentName:"p"},"use ink_lang as ink;")),(0,i.kt)("h1",{id:"description"},"Description"),(0,i.kt)("p",null,"The macro does analysis on the provided smart contract code and generates\nproper code."),(0,i.kt)("p",null,"ink! smart contracts can compile in several different modes.\nThere are two main compilation modes using either"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"on-chain mode: ",(0,i.kt)("inlineCode",{parentName:"li"},"no_std")," + WebAssembly as target"),(0,i.kt)("li",{parentName:"ul"},"off-chain mode: ",(0,i.kt)("inlineCode",{parentName:"li"},"std"))),(0,i.kt)("p",null,"We generally use the on-chain mode for actual smart contract deployment\nwhereas we use the off-chain mode for smart contract testing using the\noff-chain environment provided by the ",(0,i.kt)("inlineCode",{parentName:"p"},"ink_env")," crate."),(0,i.kt)("h1",{id:"usage"},"Usage"),(0,i.kt)("h2",{id:"header-arguments"},"Header Arguments"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink::contract]")," macro can be provided with some additional comma-separated\nheader arguments:"),(0,i.kt)("h3",{id:"dynamic_storage_allocator-bool"},(0,i.kt)("inlineCode",{parentName:"h3"},"dynamic_storage_allocator: bool")),(0,i.kt)("p",null,"Tells the ink! code generator to allow usage of ink!'s built-in dynamic\nstorage allocator."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"true"),": Use the dynamic storage allocator provided by ink!."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"false"),": Do NOT use the dynamic storage allocator provided by ink!.")),(0,i.kt)("p",null,"This feature is generally only needed for smart contracts that try to model\ntheir data in a way that contains storage entites within other storage\nentities."),(0,i.kt)("p",null,"Contract writers should try to write smart contracts that do not depend on the\ndynamic storage allocator since enabling it comes at a cost of increased Wasm\nfile size. Although it will enable interesting use cases. Use it with care!"),(0,i.kt)("p",null,"An example for this is the following type that could potentially be used\nwithin a contract's storage struct definition:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// A storage vector of storage vectors.\nuse ink_storage as storage;\ntype VectorOfVectors = storage::Vec<storage::Vec<i32>>;\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract(dynamic_storage_allocator = true)]\nmod my_contract {\n    #[ink(storage)]\n    pub struct MyStorage;\n    \n    impl MyStorage {\n        #[ink(constructor)]\n        pub fn construct() -> Self { MyStorage {} }\n        \n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n    // ...\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default value:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("h3",{id:"compile_as_dependency-bool"},(0,i.kt)("inlineCode",{parentName:"h3"},"compile_as_dependency: bool")),(0,i.kt)("p",null,"Tells the ink! code generator to ",(0,i.kt)("strong",{parentName:"p"},"always")," or ",(0,i.kt)("strong",{parentName:"p"},"never"),"\ncompile the smart contract as if it was used as a dependency of another ink!\nsmart contract."),(0,i.kt)("p",null,"Normally this flag is only really useful for ink! developers who\nwant to inspect code generation of ink! smart contracts.\nThe author is not aware of any particular practical use case for users that\nmakes use of this flag but contract writers are encouraged to disprove this."),(0,i.kt)("p",null,"Note that it is recommended to make use of the built-in crate feature\n",(0,i.kt)("inlineCode",{parentName:"p"},"ink-as-dependency")," to flag smart contract dependencies listed in a contract's\n",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," as actual dependencies to ink!."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract(compile_as_dependency = true)]\nmod my_contract {\n    #[ink(storage)]\n    pub struct MyStorage;\n    \n    impl MyStorage {\n        #[ink(constructor)]\n        pub fn construct() -> Self { MyStorage {} }\n        \n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n    // ...\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default value:")," Depends on the crate feature propagation of ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"."),(0,i.kt)("h3",{id:"env-impl-environment"},(0,i.kt)("inlineCode",{parentName:"h3"},"env: impl Environment")),(0,i.kt)("p",null,"Tells the ink! code generator which environment to use for the ink! smart contract.\nThe environment must implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"Environment")," (defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"ink_env"),") trait and provides\nall the necessary fundamental type definitions for ",(0,i.kt)("inlineCode",{parentName:"p"},"Balance"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AccountId")," etc."),(0,i.kt)("p",null,"When using a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"Environment")," implementation for a smart contract all types\nthat it exposes to the ink! smart contract and the mirrored types used in the runtime\nmust be aligned with respect to SCALE encoding and semantics."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage Example:")),(0,i.kt)("p",null,"Given a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"Environment")," implementation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct MyEnvironment;\n\nimpl ink_env::Environment for MyEnvironment {\n    const MAX_EVENT_TOPICS: usize = 3;\n    \n    type AccountId = u64;\n    type Balance = u128;\n    type Hash = [u8; 32];\n    type Timestamp = u64;\n    type BlockNumber = u32;\n    type ChainExtension = ::ink_env::NoChainExtension;\n}\n")),(0,i.kt)("p",null,"A user might implement their ink! smart contract using the above custom ",(0,i.kt)("inlineCode",{parentName:"p"},"Environment"),"\nimplementation as demonstrated below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n#[ink::contract(env = MyEnvironment)]\nmod my_contract {\n    pub struct MyEnvironment;\n   \n    impl ink_env::Environment for MyEnvironment {\n        const MAX_EVENT_TOPICS: usize = 3;\n        type AccountId = u64;\n        type Balance = u128;\n        type Hash = [u8; 32];\n        type Timestamp = u64;\n        type BlockNumber = u32;\n        type ChainExtension = ::ink_env::NoChainExtension;\n    }\n    \n    #[ink(storage)]\n    pub struct MyStorage;\n    \n    impl MyStorage {\n        #[ink(constructor)]\n        pub fn construct() -> Self { MyStorage {} }\n        \n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n    // ...\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default value:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultEnvironment")," defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"ink_env")," crate."),(0,i.kt)("h2",{id:"anaylsis"},"Anaylsis"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink::contract]")," macro fully analyses its input smart contract\nagainst invalid arguments and structure."),(0,i.kt)("p",null,"Some example rules include but are not limited to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"There must be exactly one ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink(storage)]")," struct."),(0,i.kt)("p",{parentName:"li"},"   This struct defines the layout of the storage that the ink! smart contract operates on.\nThe user is able to use a variety of built-in facilities, combine them in various ways\nor even provide their own implementations of storage data structures."),(0,i.kt)("p",{parentName:"li"},"   For more information visit the ",(0,i.kt)("inlineCode",{parentName:"p"},"ink_storage")," crate documentation."),(0,i.kt)("p",{parentName:"li"},"   ",(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn construct() -> Self { Flipper { value: false } }\n\n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"There must be at least one ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]")," defined method."),(0,i.kt)("p",{parentName:"li"},"   Methods flagged with ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]")," are special in that they are dispatchable\nupon contract instantiation. A contract may define multiple such constructors which\nallow users of the contract to instantiate a contract in multiple different ways."),(0,i.kt)("p",{parentName:"li"},"   ",(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("p",{parentName:"li"},"   Given the ",(0,i.kt)("inlineCode",{parentName:"p"},"Flipper")," contract definition above we add an ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]"),"\nas follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"There must be at least one ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink(message)]")," defined method."),(0,i.kt)("p",{parentName:"li"},"   Methods flagged with ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink(message)]")," are special in that they are dispatchable\nupon contract invocation. The set of ink! messages defined for an ink! smart contract\ndefine its API surface with which users are allowed to interact."),(0,i.kt)("p",{parentName:"li"},"   An ink! smart contract can have multiple such ink! messages defined."),(0,i.kt)("p",{parentName:"li"},"   ",(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An ink! message with a ",(0,i.kt)("inlineCode",{parentName:"p"},"&self")," receiver may only read state whereas an ink! message\nwith a ",(0,i.kt)("inlineCode",{parentName:"p"},"&mut self")," receiver may mutate the contract's storage."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("p",{parentName:"li"},"Given the ",(0,i.kt)("inlineCode",{parentName:"p"},"Flipper")," contract definition above we add some ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink(message)]")," definitions\nas follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        /// Flips the current value.\n        #[ink(message)]\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Returns the current value.\n        #[ink(message)]\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Payable Messages:")),(0,i.kt)("p",{parentName:"li"},"An ink! message by default will reject calls that additional fund the smart contract.\nAuthors of ink! smart contracts can make an ink! message payable by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"payable"),"\nflag to it. An example below:"),(0,i.kt)("p",{parentName:"li"},"Note that ink! constructors are always implicitly payable and thus cannot be flagged\nas such."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        /// Flips the current value.\n        #[ink(message)]\n        #[ink(payable)] // You can either specify payable out-of-line.\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Returns the current value.\n        #[ink(message, payable)] // ... or specify payable inline.\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Controlling the messages selector:")),(0,i.kt)("p",{parentName:"li"},"Every ink! message and ink! constructor has a unique selector with which the\nmessage or constructor can be uniquely identified within the ink! smart contract.\nThese selectors are mainly used to drive the contract's dispatch upon calling it."),(0,i.kt)("p",{parentName:"li"},"An ink! smart contract author can control the selector of an ink! message or ink!\nconstructor using the ",(0,i.kt)("inlineCode",{parentName:"p"},"selector")," flag. An example is shown below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use ink_lang as ink;\n\n#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        #[ink(selector = "0xDEADBEEF")] // Works on constructors as well.\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        /// Flips the current value.\n        #[ink(message)]\n        #[ink(selector = "0xCAFEBABE")] // You can either specify selector out-of-line.\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n       \n        /// Returns the current value.\n        #[ink(message, selector = "0xFEEDBEEF")] // ... or specify selector inline.\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n')))))),(0,i.kt)("h2",{id:"interacting-with-the-contract-executor"},"Interacting with the Contract Executor"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ink_env")," crate provides facitilies to interact with the contract executor that\nconnects ink! smart contracts with the outer world."),(0,i.kt)("p",null,"For example it is possible to query the current call's caller via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_env;\nink_env::test::run_test::<ink_env::DefaultEnvironment, _>(|_| {\n    let caller = ink_env::caller::<ink_env::DefaultEnvironment>();\n    let _caller = caller;\n    Ok(())\n}).unwrap();\n")),(0,i.kt)("p",null,"However, ink! provides a much simpler way to interact with the contract executor\nvia its environment accessor. An example below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use ink_lang as ink;\n \n#[ink::contract]\nmod greeter {\n    #[ink(storage)]\n    pub struct Greeter;\n\n    impl Greeter {\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            let caller = Self::env().caller();\n            let message = format!("thanks for instantiation {:?}", caller);\n            ink_env::debug_println(&message);\n            Greeter {}\n        }\n\n        #[ink(message, payable)]\n        pub fn fund(&mut self) {\n            let caller = self.env().caller();\n            let value = self.env().transferred_balance();\n            let message = format!("thanks for the funding of {:?} from {:?}", value, caller);\n            ink_env::debug_println(&message);\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("p",null,"An ink! smart contract may define events that it can emit during contract execution.\nEmitting events can be used by third party tools to query information about a contract's\nexecution and state."),(0,i.kt)("p",null,"The following example ink! contract shows how an event ",(0,i.kt)("inlineCode",{parentName:"p"},"Transferred")," is defined and\nemitted in the ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"}," use ink_lang as ink;\n \n #[ink::contract]\n mod erc20 {\n     /// Defines an event that is emitted every time value is transferred.\n     #[ink(event)]\n     pub struct Transferred {\n         from: Option<AccountId>,\n         to: Option<AccountId>,\n         value: Balance,\n     }\n\n     #[ink(storage)]\n     pub struct Erc20 {\n         total_supply: Balance,\n         // more fields ...\n     }\n\n     impl Erc20 {\n         #[ink(constructor)]\n         pub fn new(initial_supply: Balance) -> Self {\n             let caller = Self::env().caller();\n             Self::env().emit_event(Transferred {\n                 from: None,\n                 to: Some(caller),\n                 value: initial_supply,\n             });\n             Self { total_supply: initial_supply }\n         }\n\n         #[ink(message)]\n         pub fn total_supply(&self) -> Balance {\n             self.total_supply\n         }\n     }\n }\n")),(0,i.kt)("h2",{id:"example-flipper"},"Example: Flipper"),(0,i.kt)("p",null,'The below code shows the complete implementation of the so-called Flipper\nink! smart contract.\nFor us it acts as the "Hello, World!" of the ink! smart contracts because\nit is minimal while still providing some more or less useful functionality.'),(0,i.kt)("p",null,"It controls a single ",(0,i.kt)("inlineCode",{parentName:"p"},"bool")," value that can be either ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\nand allows the user to flip this value using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Flipper::flip")," message\nor retrieve the current value using ",(0,i.kt)("inlineCode",{parentName:"p"},"Flipper::get"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\npub mod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        /// Creates a new flipper smart contract initialized with the given value.\n        #[ink(constructor)]\n        pub fn new(init_value: bool) -> Self {\n            Self { value: init_value }\n        }\n\n        /// Flips the current value of the Flipper's bool.\n        #[ink(message)]\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Returns the current value of the Flipper's bool.\n        #[ink(message)]\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n")))}m.isMDXComponent=!0}}]);