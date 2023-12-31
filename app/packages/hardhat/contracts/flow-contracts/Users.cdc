pub contract Users {
    pub struct User {
        pub let name: String
        pub let wallet: Address

        init(_name: String, _wallet: Address) {
            self.name = _name
            self.wallet = _wallet
        }
    }

    pub var users: [User]
    pub var userNames: {Address: String}

    init() {
        self.users = []
        self.userNames = {}
    }

    pub fun addUser(_name: String, _wallet: Address) {
        let newUser = User(_name: _name, _wallet: _wallet)
        self.users.append(newUser)
        self.userNames[_wallet] = _name
    }

    pub fun getUserByIdx(index: Int): User {
        return self.users[index]
    }

    pub fun getUserName(_userAddress: Address): String {
        return self.userNames[_userAddress]!
    }
}