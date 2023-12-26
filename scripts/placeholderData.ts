const users = [
    {
        id: "410544b2-4001-4271-9855-fec4b6a6442a",
        name: "Nikhil BK",
        email: "nikhil@gmail.com",
        password: "nikhil@123",
        username: "NBK"
    },
];

const transactions = [
    {
        transaction_id: "ebf1b2a3-9e22-46e8-9ef0-201f7d89ea9c",
        user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
        date: new Date("11/23/2023 7:30 pm"),
        transaction_type: "added",
        amount: 120,
        transaction_status: "complete"
    },
    {
        transaction_id: "a4e385a7-1cf0-40d3-9a9f-d4a1a19fe5d8",
        user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
        date: new Date("11/21/2023 6:30 pm"),
        transaction_type: "added",
        amount: 70,
        transaction_status: "complete"
    },
    {
        transaction_id: "ca1749b2-82d1-4c48-8bfa-55c832c5f933",
        user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
        date: new Date("11/19/2023 5:38 pm"),
        transaction_type: "withdrawn",
        amount: 200,
        transaction_status: "complete"
    },
    {
        transaction_id: "65c0d7bc-ec3d-48de-8db6-4b7baed4b318",
        user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
        date: new Date("11/12/2023 9:34 am"),
        transaction_type: "added",
        amount: 70,
        transaction_status: "complete"
    },
    {
        transaction_id: "e77d3d7a-37b2-4930-86b4-1a1ebbe8bc0b",
        user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
        date: new Date("11/2/2023 10:22 am"),
        transaction_type: "added",
        amount: 200,
        transaction_status: "complete"
    },
];

const earnings = [
    {
        earning_id: "1b5b3a8b-2a1e-4b4c-9a5d-0e2a8a76b71d",
        user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
        match_id: "f33d6c0a-9c2a-40e1-b7b2-7d1f8f4e5a8d",
        date: new Date("11/7/2023 7:30 pm"),
        teams: "RCB vs CSK",
        amount: 120,
        result: "won"
    },
    {
        earning_id: "2e9a8e15-1e8b-4c8a-8c96-3d81f3c6fe5d",
        user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
        match_id: "9d3c8b12-4f7e-4c91-8e5a-6b6f8d2a7d4c",
        date: new Date("11/21/2023 7:30 pm"),
        teams: "SRH vs KKR",
        amount: 100,
        result: "lost"
    },
    {
        earning_id: "3c7d8e9f-8a4b-4e6b-9d2c-1f3a4c5e6d7f",
        user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
        match_id: "5f9e8d7c-6b5a-4d3c-9e1f-8a7b6c5d4e3f",
        date: new Date("11/20/2023 7:30 pm"),
        teams: "MI vs DC",
        amount: 200,
        result: "won"
    },
    {
        earning_id: "4d5e6f7a-9b8c-4a3e-8d2f-1c7b6a5a4a3e",
        user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
        match_id: "7b8c9d0e-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
        date: new Date("11/18/2023 3:30 pm"),
        teams: "RCB vs KKR",
        amount: 130,
        result: "lost"
    },
    {
        earning_id: "5e6f7a8b-9c0d-4e5f-8a9b-0c1d2e3f4a5b",
        user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
        match_id: "3d2e1f0c-a9b8-7c6d-5e4f-3a2b1c0d9e8f",
        date: new Date("11/22/2023 7:30 pm"),
        teams: "MI vs CSK",
        amount: 200,
        result: "won"
    }
];

const teams = [
    {
        team_id: "9f51258e-65e7-4e2a-af50-764c04d50b99",
        team_name: "RCB",
        players_list: [
            { "player_id": "cc9a6b3e-0bfa-4a70-8b2c-6a83c0d3b210", "player_name": "Virat Kohli" },
            { "player_id": "ae09f1a7-3a0e-4429-94cc-0eb6933ac292", "player_name": "AB de Villiers" },
            { "player_id": "c0a68e6f-40a1-4a2c-8e07-efcdcf01a936", "player_name": "Yuzvendra Chahal" },
            { "player_id": "f2f7247c-9c85-4e84-8da1-905c822b7a36", "player_name": "Glenn Maxwell" },
            { "player_id": "8baf0c05-eb37-490f-9ba2-04b6a9a6d1d5", "player_name": "Mohammed Siraj" },
            { "player_id": "ca051703-82ee-44b3-8b4f-96cbcf32e4bf", "player_name": "Devdutt Padikkal" },
            { "player_id": "14b67365-8018-4914-bf85-5c774ef18418", "player_name": "Washington Sundar" },
            { "player_id": "c2c80463-992b-4d91-91a2-8499f101c74c", "player_name": "Kyle Jamieson" },
            { "player_id": "34e2c499-e1e4-4c1e-9e19-4ec68a950430", "player_name": "Navdeep Saini" },
            { "player_id": "76133a57-01b1-4a54-9a2b-c0620a719d8c", "player_name": "Dan Christian" },
            { "player_id": "f16f9f8e-eb33-4777-a7cf-61a554c42e3e", "player_name": "Sachin Baby" }
        ]
    },
    {
        team_id: "af958d8a-9e01-4f0b-8bc7-525b96f26041",
        team_name: "CSK",
        players_list: [
            { "player_id": "a9e5c2ef-4e88-4e74-9aeb-145d55b7b0c9", "player_name": "MS Dhoni" },
            { "player_id": "f3bd16f5-8bd4-48e7-9a7f-3e4ee5a7dd90", "player_name": "Suresh Raina" },
            { "player_id": "1e5a9d3e-0382-49a4-9f1c-71e011feab98", "player_name": "Ravindra Jadeja" },
            { "player_id": "62305132-bf1b-4e86-a5f4-04c01a3ce267", "player_name": "Deepak Chahar" },
            { "player_id": "7f2a3e1d-5c49-4bd3-8c12-3c5b4d836fa0", "player_name": "Faf du Plessis" },
            { "player_id": "b740c722-b2e5-4c7e-82a6-ee95d75dbb18", "player_name": "Ambati Rayudu" },
            { "player_id": "d15c2df5-32d2-4fc8-8a05-b2e1c6460f55", "player_name": "Sam Curran" },
            { "player_id": "29537b41-cf24-4bae-a1db-6f97c1da1a5b", "player_name": "Dwayne Bravo" },
            { "player_id": "11e0d95e-d9b4-4688-ae10-21c8e9ad7b2c", "player_name": "Imran Tahir" },
            { "player_id": "25a032c9-79a7-4a0f-a1c2-9eab0400c9b4", "player_name": "Shardul Thakur" },
            { "player_id": "7c91674d-8c2b-4a93-a94f-b4a3e5fe4d0a", "player_name": "Ruturaj Gaikwad" }
        ]
    },
    {
        team_id: "c29ea6da-8f60-49c4-b508-47761b7fca42",
        team_name: "MI",
        players_list: [
            { "player_id": "b9e5c2ef-4e88-4e74-9aeb-145d55b7b0c9", "player_name": "Rohit Sharma" },
            { "player_id": "c9e5c2ef-4e88-4e74-9aeb-145d55b7b0c9", "player_name": "Jasprit Bumrah" },
            { "player_id": "d9e5c2ef-4e88-4e74-9aeb-145d55b7b0c9", "player_name": "Hardik Pandya" },
            { "player_id": "e9e5c2ef-4e88-4e74-9aeb-145d55b7b0c9", "player_name": "Kieron Pollard" },
            { "player_id": "f9e5c2ef-4e88-4e74-9aeb-145d55b7b0c9", "player_name": "Quinton de Kock" },
            { "player_id": "09e5c2ef-4e88-4e74-9aeb-145d55b7b0c9", "player_name": "Suryakumar Yadav" },
            { "player_id": "19e5c2ef-4e88-4e74-9aeb-145d55b7b0c9", "player_name": "Ishan Kishan" },
            { "player_id": "29e5c2ef-4e88-4e74-9aeb-145d55b7b0c9", "player_name": "Trent Boult" },
            { "player_id": "39e5c2ef-4e88-4e74-9aeb-145d55b7b0c9", "player_name": "Krunal Pandya" },
            { "player_id": "49e5c2ef-4e88-4e74-9aeb-145d55b7b0c9", "player_name": "Jayant Yadav" },
            { "player_id": "59e5c2ef-4e88-4e74-9aeb-145d55b7b0c9", "player_name": "Adam Milne" }
        ]
    },
    {
        team_id: "eb3100bf-ecc5-4c17-9a14-eeeb12b4d5a3",
        team_name: "KKR",
        players_list: [
            { "player_id": "59e5c2ef-4e88-4e74-9aeb-145d55b7b0c9", "player_name": "Eoin Morgan" },
            { "player_id": "69e5c2ef-4e88-4e74-9aeb-145d55b7b0c9", "player_name": "Andre Russell" },
            { "player_id": "79e5c2ef-4e88-4e74-9aeb-145d55b7b0c9", "player_name": "Pat Cummins" },
            { "player_id": "89e5c2ef-4e88-4e74-9aeb-145d55b7b0c9", "player_name": "Shubman Gill" },
            { "player_id": "99e5c2ef-4e88-4e74-9aeb-145d55b7b0c9", "player_name": "Sunil Narine" },
            { "player_id": "a0e5c2ef-4e88-4e74-9aeb-145d55b7b0c9", "player_name": "Dinesh Karthik" },
            { "player_id": "b0e5c2ef-4e88-4e74-9aeb-145d55b7b0c9", "player_name": "Varun Chakravarthy" },
            { "player_id": "c0e5c2ef-4e88-4e74-9aeb-145d55b7b0c9", "player_name": "Lockie Ferguson" },
            { "player_id": "d0e5c2ef-4e88-4e74-9aeb-145d55b7b0c9", "player_name": "Nitish Rana" },
            { "player_id": "e0e5c2ef-4e88-4e74-9aeb-145d55b7b0c9", "player_name": "Rahul Tripathi" },
            { "player_id": "f0e5c2ef-4e88-4e74-9aeb-145d55b7b0c9", "player_name": "Prasidh Krishna" }
        ]
    },
    {
        team_id: "d13c5f5b-bfe9-41ef-8be4-bbe4976b1c33",
        team_name: "SRH",
        players_list: [
            { "player_id": "0240551f-f4d9-4379-82e4-d7dacd3a6f04", "player_name": "Kane Williamson" },
            { "player_id": "360b08df-fb33-4116-9d29-b3e52c8bbe3a", "player_name": "David Warner" },
            { "player_id": "48ddcbad-d32e-4faf-abbe-31aad1af9bba", "player_name": "Rashid Khan" },
            { "player_id": "a25e80ea-466c-48d5-ae00-ad56cdf31173", "player_name": "Bhuvneshwar Kumar" },
            { "player_id": "20b85839-8fa1-4545-bdc4-b9f437a82a8a", "player_name": "Jonny Bairstow" },
            { "player_id": "b176ae68-c4fe-4235-8415-f55968538643", "player_name": "Manish Pandey" },
            { "player_id": "b19d2b60-918a-49f4-bec6-9fc291ab1862", "player_name": "Wriddhiman Saha" },
            { "player_id": "8c39a34d-8945-4abe-a949-5f2efd56fb20", "player_name": "Mohammad Nabi" },
            { "player_id": "6999c51a-1355-4a1c-b673-a9dff4caf8a5", "player_name": "Sandeep Sharma" },
            { "player_id": "d42660fc-bffa-4d23-89d5-54c95d19a9a4", "player_name": "T Natarajan" },
            { "player_id": "dc065632-514d-4c5d-a05c-a1829b07051f", "player_name": "Abdul Samad" }
        ]
    },
    {
        team_id: "6c9c3bd7-9015-475f-ae7b-b6a00f66b38c",
        team_name: "DC",
        players_list: [
            { "player_id": "9099c1a2-bcea-424b-8b5b-0c396d5f984f", "player_name": "Rishabh Pant" },
            { "player_id": "b5d86802-5539-4fac-ab7f-ce5277258ecf", "player_name": "Shikhar Dhawan" },
            { "player_id": "d6501f10-f831-4c28-8549-42085a9b5bf3", "player_name": "Kagiso Rabada" },
            { "player_id": "724260ca-4b76-451b-84ac-4669c99f59f8", "player_name": "Prithvi Shaw" },
            { "player_id": "5f3f098d-cc63-48f0-857c-d3fb98adb753", "player_name": "Shimron Hetmyer" },
            { "player_id": "ef9d2178-b259-44b9-b848-c28c89be4e0f", "player_name": "Marcus Stoinis" },
            { "player_id": "18aacf45-6b15-4760-9b6e-ae309ce2a2d8", "player_name": "Steven Smith" },
            { "player_id": "97f83bec-a9d5-4af0-ad1c-34869cc3737c", "player_name": "Axar Patel" },
            { "player_id": "62e07612-94ee-4b1d-845e-d319c56578b8", "player_name": "Amit Mishra" },
            { "player_id": "21fb64c0-1822-4ffb-955a-e0e7626552ad", "player_name": "Ishant Sharma" },
            { "player_id": "f743bf07-d528-449c-8c2c-d370ba98ef3e", "player_name": "Chris Woakes" }
        ]
    },
    {
        team_id: "841a390c-53a7-4f32-97d5-dcfd743d3d5b",
        team_name: "PBKS",
        players_list: [
            { "player_id": "903a5031-eab7-4aaf-beeb-03965e5fdc01", "player_name": "KL Rahul" },
            { "player_id": "23b699ca-4b2d-457b-89eb-2196bf3de58e", "player_name": "Chris Gayle" },
            { "player_id": "b4e0f9d0-1ff7-4639-b962-75a49b6b4915", "player_name": "Mayank Agarwal" },
            { "player_id": "33791625-9db9-45e4-8706-204bbfbaaf35", "player_name": "Mohammed Shami" },
            { "player_id": "efd3f6ba-284b-42e4-a338-bf149e3fd2cc", "player_name": "Nicholas Pooran" },
            { "player_id": "8fe10bc1-0a92-4779-bb24-445fb68f2ae4", "player_name": "Dawid Malan" },
            { "player_id": "6db65ec0-ea13-4077-9330-5b51b59dff5c", "player_name": "Deepak Hooda" },
            { "player_id": "bc8c65b2-ffd9-411e-a765-0c2475fa0161", "player_name": "Arshdeep Singh" },
            { "player_id": "95f968b6-57ac-4344-b1ef-c69fa823ba33", "player_name": "Ravi Bishnoi" },
            { "player_id": "ebc3bba8-803d-4973-a913-b913129c725d", "player_name": "Mandeep Singh" },
            { "player_id": "74ac6046-02f1-473b-a395-ab77fce0a2ea", "player_name": "Fabian Allen" }
        ]
    },
    {
        team_id: "5a6473e0-4de1-46a1-845a-4d2a55a256ad",
        team_name: "RR",
        players_list: [
            { "player_id": "38bafb33-a290-4774-a3c0-b6178327996d", "player_name": "Sanju Samson" },
            { "player_id": "ce2ca11b-9808-493b-9f30-5382636a97c6", "player_name": "Jos Buttler" },
            { "player_id": "7bf508ee-7abb-4d0d-b1c9-fd02ab60b5a4", "player_name": "Ben Stokes" },
            { "player_id": "561dc03f-1c97-446c-9ba4-61ea498ada11", "player_name": "Jofra Archer" },
            { "player_id": "1de4e9bd-8e8e-4792-a5e1-2bef2a2e15b0", "player_name": "Riyan Parag" },
            { "player_id": "36f06b64-c584-479c-b261-8f5668499c8e", "player_name": "Chris Morris" },
            { "player_id": "7bb59ff0-91db-4803-96e8-c12edbfaec7a", "player_name": "David Miller" },
            { "player_id": "f6ae6a70-6db2-40c8-8ec4-312078f05111", "player_name": "Shreyas Gopal" },
            { "player_id": "ee5e5854-0261-481c-8b87-c463b6bbee75", "player_name": "Mustafizur Rahman" },
            { "player_id": "25813010-f843-461d-b4b7-5712ce7c621e", "player_name": "Jaydev Unadkat" },
            { "player_id": "ffea7c52-1ffb-4aeb-a52a-983af431e9de", "player_name": "Yashasvi Jaiswal" }
        ]
    }
];

const players = [
    {
        player_id: "cc9a6b3e-0bfa-4a70-8b2c-6a83c0d3b210",
        player_name: "Virat Kohli",
        team_id: "9f51258e-65e7-4e2a-af50-764c04d50b99",
        team_name: "RCB"
    },
    {
        player_id: "ae09f1a7-3a0e-4429-94cc-0eb6933ac292",
        player_name: "AB de Villiers",
        team_id: "9f51258e-65e7-4e2a-af50-764c04d50b99",
        team_name: "RCB"
    },
    {
        player_id: "c0a68e6f-40a1-4a2c-8e07-efcdcf01a936",
        player_name: "Yuzvendra Chahal",
        team_id: "9f51258e-65e7-4e2a-af50-764c04d50b99",
        team_name: "RCB"
    },
    {
        player_id: "f2f7247c-9c85-4e84-8da1-905c822b7a36",
        player_name: "Glenn Maxwell",
        team_id: "9f51258e-65e7-4e2a-af50-764c04d50b99",
        team_name: "RCB"
    },
    {
        player_id: "8baf0c05-eb37-490f-9ba2-04b6a9a6d1d5",
        player_name: "Mohammed Siraj",
        team_id: "9f51258e-65e7-4e2a-af50-764c04d50b99",
        team_name: "RCB"
    },
    {
        player_id: "ca051703-82ee-44b3-8b4f-96cbcf32e4bf",
        player_name: "Devdutt Padikkal",
        team_id: "9f51258e-65e7-4e2a-af50-764c04d50b99",
        team_name: "RCB"
    },
    {
        player_id: "14b67365-8018-4914-bf85-5c774ef18418",
        player_name: "Washington Sundar",
        team_id: "9f51258e-65e7-4e2a-af50-764c04d50b99",
        team_name: "RCB"
    },
    {
        player_id: "c2c80463-992b-4d91-91a2-8499f101c74c",
        player_name: "Kyle Jamieson",
        team_id: "9f51258e-65e7-4e2a-af50-764c04d50b99",
        team_name: "RCB"
    },
    {
        player_id: "34e2c499-e1e4-4c1e-9e19-4ec68a950430",
        player_name: "Navdeep Saini",
        team_id: "9f51258e-65e7-4e2a-af50-764c04d50b99",
        team_name: "RCB"
    },
    {
        player_id: "76133a57-01b1-4a54-9a2b-c0620a719d8c",
        player_name: "Dan Christian",
        team_id: "9f51258e-65e7-4e2a-af50-764c04d50b99",
        team_name: "RCB"
    },
    {
        player_id: "f16f9f8e-eb33-4777-a7cf-61a554c42e3e",
        player_name: "Sachin Baby",
        team_id: "9f51258e-65e7-4e2a-af50-764c04d50b99",
        team_name: "RCB"
    },
    {
        player_id: "a9e5c2ef-4e88-4e74-9aeb-145d55b7b0c9",
        player_name: "MS Dhoni",
        team_id: "af958d8a-9e01-4f0b-8bc7-525b96f26041",
        team_name: "CSK"
    },
    {
        player_id: "f3bd16f5-8bd4-48e7-9a7f-3e4ee5a7dd90",
        player_name: "Suresh Raina",
        team_id: "af958d8a-9e01-4f0b-8bc7-525b96f26041",
        team_name: "CSK"
    },
    {
        player_id: "1e5a9d3e-0382-49a4-9f1c-71e011feab98",
        player_name: "Ravindra Jadeja",
        team_id: "af958d8a-9e01-4f0b-8bc7-525b96f26041",
        team_name: "CSK"
    },
    {
        player_id: "62305132-bf1b-4e86-a5f4-04c01a3ce267",
        player_name: "Deepak Chahar",
        team_id: "af958d8a-9e01-4f0b-8bc7-525b96f26041",
        team_name: "CSK"
    },
    {
        player_id: "7f2a3e1d-5c49-4bd3-8c12-3c5b4d836fa0",
        player_name: "Faf du Plessis",
        team_id: "af958d8a-9e01-4f0b-8bc7-525b96f26041",
        team_name: "CSK"
    },
    {
        player_id: "b740c722-b2e5-4c7e-82a6-ee95d75dbb18",
        player_name: "Ambati Rayudu",
        team_id: "af958d8a-9e01-4f0b-8bc7-525b96f26041",
        team_name: "CSK"
    },
    {
        player_id: "d15c2df5-32d2-4fc8-8a05-b2e1c6460f55",
        player_name: "Sam Curran",
        team_id: "af958d8a-9e01-4f0b-8bc7-525b96f26041",
        team_name: "CSK"
    },
    {
        player_id: "29537b41-cf24-4bae-a1db-6f97c1da1a5b",
        player_name: "Dwayne Bravo",
        team_id: "af958d8a-9e01-4f0b-8bc7-525b96f26041",
        team_name: "CSK"
    },
    {
        player_id: "11e0d95e-d9b4-4688-ae10-21c8e9ad7b2c",
        player_name: "Imran Tahir",
        team_id: "af958d8a-9e01-4f0b-8bc7-525b96f26041",
        team_name: "CSK"
    },
    {
        player_id: "25a032c9-79a7-4a0f-a1c2-9eab0400c9b4",
        player_name: "Shardul Thakur",
        team_id: "af958d8a-9e01-4f0b-8bc7-525b96f26041",
        team_name: "CSK"
    },
    {
        player_id: "7c91674d-8c2b-4a93-a94f-b4a3e5fe4d0a",
        player_name: "Ruturaj Gaikwad",
        team_id: "af958d8a-9e01-4f0b-8bc7-525b96f26041",
        team_name: "CSK"
    },
    {
        player_id: "b9e5c2ef-4e88-4e74-9aeb-145d55b7b0c9",
        player_name: "Rohit Sharma",
        team_id: "c29ea6da-8f60-49c4-b508-47761b7fca42",
        team_name: "MI"
    },
    {
        player_id: "c9e5c2ef-4e88-4e74-9aeb-145d55b7b0c9",
        player_name: "Jasprit Bumrah",
        team_id: "c29ea6da-8f60-49c4-b508-47761b7fca42",
        team_name: "MI"
    },
    {
        player_id: "d9e5c2ef-4e88-4e74-9aeb-145d55b7b0c9",
        player_name: "Hardik Pandya",
        team_id: "c29ea6da-8f60-49c4-b508-47761b7fca42",
        team_name: "MI"
    },
    {
        player_id: "e9e5c2ef-4e88-4e74-9aeb-145d55b7b0c9",
        player_name: "Kieron Pollard",
        team_id: "c29ea6da-8f60-49c4-b508-47761b7fca42",
        team_name: "MI"
    },
    {
        player_id: "f9e5c2ef-4e88-4e74-9aeb-145d55b7b0c9",
        player_name: "Quinton de Kock",
        team_id: "c29ea6da-8f60-49c4-b508-47761b7fca42",
        team_name: "MI"
    },
    {
        player_id: "09e5c2ef-4e88-4e74-9aeb-145d55b7b0c9",
        player_name: "Suryakumar Yadav",
        team_id: "c29ea6da-8f60-49c4-b508-47761b7fca42",
        team_name: "MI"
    },
    {
        player_id: "19e5c2ef-4e88-4e74-9aeb-145d55b7b0c9",
        player_name: "Ishan Kishan",
        team_id: "c29ea6da-8f60-49c4-b508-47761b7fca42",
        team_name: "MI"
    },
    {
        player_id: "29e5c2ef-4e88-4e74-9aeb-145d55b7b0c9",
        player_name: "Trent Boult",
        team_id: "c29ea6da-8f60-49c4-b508-47761b7fca42",
        team_name: "MI"
    },
    {
        player_id: "39e5c2ef-4e88-4e74-9aeb-145d55b7b0c9",
        player_name: "Krunal Pandya",
        team_id: "c29ea6da-8f60-49c4-b508-47761b7fca42",
        team_name: "MI"
    },
    {
        player_id: "39e5c2ef-4e88-4e74-9aeb-145d55b7b0c9",
        player_name: "Jayant Yadav",
        team_id: "c29ea6da-8f60-49c4-b508-47761b7fca42",
        team_name: "MI"
    },
    {
        player_id: "39e5c2ef-4e88-4e74-9aeb-145d55b7b0c9",
        player_name: "Adam Milne",
        team_id: "c29ea6da-8f60-49c4-b508-47761b7fca42",
        team_name: "MI"
    },
    {
        player_id: "59e5c2ef-4e88-4e74-9aeb-145d55b7b0c9",
        player_name: "Eoin Morgan",
        team_id: "eb3100bf-ecc5-4c17-9a14-eeeb12b4d5a3",
        team_name: "KKR"
    },
    {
        player_id: "69e5c2ef-4e88-4e74-9aeb-145d55b7b0c9",
        player_name: "Andre Russell",
        team_id: "eb3100bf-ecc5-4c17-9a14-eeeb12b4d5a3",
        team_name: "KKR"
    },
    {
        player_id: "79e5c2ef-4e88-4e74-9aeb-145d55b7b0c9",
        player_name: "Pat Cummins",
        team_id: "eb3100bf-ecc5-4c17-9a14-eeeb12b4d5a3",
        team_name: "KKR"
    },
    {
        player_id: "89e5c2ef-4e88-4e74-9aeb-145d55b7b0c9",
        player_name: "Shubman Gill",
        team_id: "eb3100bf-ecc5-4c17-9a14-eeeb12b4d5a3",
        team_name: "KKR"
    },
    {
        player_id: "99e5c2ef-4e88-4e74-9aeb-145d55b7b0c9",
        player_name: "Sunil Narine",
        team_id: "eb3100bf-ecc5-4c17-9a14-eeeb12b4d5a3",
        team_name: "KKR"
    },
    {
        player_id: "a0e5c2ef-4e88-4e74-9aeb-145d55b7b0c9",
        player_name: "Dinesh Karthik",
        team_id: "eb3100bf-ecc5-4c17-9a14-eeeb12b4d5a3",
        team_name: "KKR"
    },
    {
        player_id: "b0e5c2ef-4e88-4e74-9aeb-145d55b7b0c9",
        player_name: "Varun Chakravarthy",
        team_id: "eb3100bf-ecc5-4c17-9a14-eeeb12b4d5a3",
        team_name: "KKR"
    },
    {
        player_id: "c0e5c2ef-4e88-4e74-9aeb-145d55b7b0c9",
        player_name: "Lockie Ferguson",
        team_id: "eb3100bf-ecc5-4c17-9a14-eeeb12b4d5a3",
        team_name: "KKR"
    },
    {
        player_id: "d0e5c2ef-4e88-4e74-9aeb-145d55b7b0c9",
        player_name: "Nitish Rana",
        team_id: "eb3100bf-ecc5-4c17-9a14-eeeb12b4d5a3",
        team_name: "KKR"
    },
    {
        player_id: "e0e5c2ef-4e88-4e74-9aeb-145d55b7b0c9",
        player_name: "Rahul Tripathi",
        team_id: "eb3100bf-ecc5-4c17-9a14-eeeb12b4d5a3",
        team_name: "KKR"
    },
    {
        player_id: "f0e5c2ef-4e88-4e74-9aeb-145d55b7b0c9",
        player_name: "Prasidh Krishna",
        team_id: "eb3100bf-ecc5-4c17-9a14-eeeb12b4d5a3",
        team_name: "KKR"
    },
    {
        player_id: "0240551f-f4d9-4379-82e4-d7dacd3a6f04",
        player_name: "Kane Williamson",
        team_id: "d13c5f5b-bfe9-41ef-8be4-bbe4976b1c33",
        team_name: "SRH"
    },
    {
        player_id: "360b08df-fb33-4116-9d29-b3e52c8bbe3a",
        player_name: "David Warner",
        team_id: "d13c5f5b-bfe9-41ef-8be4-bbe4976b1c33",
        team_name: "SRH"
    },
    {
        player_id: "48ddcbad-d32e-4faf-abbe-31aad1af9bba",
        player_name: "Rashid Khan",
        team_id: "d13c5f5b-bfe9-41ef-8be4-bbe4976b1c33",
        team_name: "SRH"
    },
    {
        player_id: "a25e80ea-466c-48d5-ae00-ad56cdf31173",
        player_name: "Bhuvneshwar Kumar",
        team_id: "d13c5f5b-bfe9-41ef-8be4-bbe4976b1c33",
        team_name: "SRH"
    },
    {
        player_id: "20b85839-8fa1-4545-bdc4-b9f437a82a8a",
        player_name: "Jonny Bairstow",
        team_id: "d13c5f5b-bfe9-41ef-8be4-bbe4976b1c33",
        team_name: "SRH"
    },
    {
        player_id: "b176ae68-c4fe-4235-8415-f55968538643",
        player_name: "Manish Pandey",
        team_id: "d13c5f5b-bfe9-41ef-8be4-bbe4976b1c33",
        team_name: "SRH"
    },
    {
        player_id: "b19d2b60-918a-49f4-bec6-9fc291ab1862",
        player_name: "Wriddhiman Saha",
        team_id: "d13c5f5b-bfe9-41ef-8be4-bbe4976b1c33",
        team_name: "SRH"
    },
    {
        player_id: "8c39a34d-8945-4abe-a949-5f2efd56fb20",
        player_name: "Mohammad Nabi",
        team_id: "d13c5f5b-bfe9-41ef-8be4-bbe4976b1c33",
        team_name: "SRH"
    },
    {
        player_id: "6999c51a-1355-4a1c-b673-a9dff4caf8a5",
        player_name: "Sandeep Sharma",
        team_id: "d13c5f5b-bfe9-41ef-8be4-bbe4976b1c33",
        team_name: "SRH"
    },
    {
        player_id: "d42660fc-bffa-4d23-89d5-54c95d19a9a4",
        player_name: "T Natarajan",
        team_id: "d13c5f5b-bfe9-41ef-8be4-bbe4976b1c33",
        team_name: "SRH"
    },
    {
        player_id: "dc065632-514d-4c5d-a05c-a1829b07051f",
        player_name: "Abdul Samad",
        team_id: "d13c5f5b-bfe9-41ef-8be4-bbe4976b1c33",
        team_name: "SRH"
    },
    {
        player_id: "9099c1a2-bcea-424b-8b5b-0c396d5f984f",
        player_name: "Rishabh Pant",
        team_id: "6c9c3bd7-9015-475f-ae7b-b6a00f66b38c",
        team_name: "DC"
    },
    {
        player_id: "b5d86802-5539-4fac-ab7f-ce5277258ecf",
        player_name: "Shikhar Dhawan",
        team_id: "6c9c3bd7-9015-475f-ae7b-b6a00f66b38c",
        team_name: "DC"
    },
    {
        player_id: "d6501f10-f831-4c28-8549-42085a9b5bf3",
        player_name: "Kagiso Rabada",
        team_id: "6c9c3bd7-9015-475f-ae7b-b6a00f66b38c",
        team_name: "DC"
    },
    {
        player_id: "724260ca-4b76-451b-84ac-4669c99f59f8",
        player_name: "Prithvi Shaw",
        team_id: "6c9c3bd7-9015-475f-ae7b-b6a00f66b38c",
        team_name: "DC"
    },
    {
        player_id: "5f3f098d-cc63-48f0-857c-d3fb98adb753",
        player_name: "Shimron Hetmyer",
        team_id: "6c9c3bd7-9015-475f-ae7b-b6a00f66b38c",
        team_name: "DC"
    },
    {
        player_id: "ef9d2178-b259-44b9-b848-c28c89be4e0f",
        player_name: "Marcus Stoinis",
        team_id: "6c9c3bd7-9015-475f-ae7b-b6a00f66b38c",
        team_name: "DC"
    },
    {
        player_id: "18aacf45-6b15-4760-9b6e-ae309ce2a2d8",
        player_name: "Steven Smith",
        team_id: "6c9c3bd7-9015-475f-ae7b-b6a00f66b38c",
        team_name: "DC"
    },
    {
        player_id: "97f83bec-a9d5-4af0-ad1c-34869cc3737c",
        player_name: "Axar Patel",
        team_id: "6c9c3bd7-9015-475f-ae7b-b6a00f66b38c",
        team_name: "DC"
    },
    {
        player_id: "62e07612-94ee-4b1d-845e-d319c56578b8",
        player_name: "Amit Mishra",
        team_id: "6c9c3bd7-9015-475f-ae7b-b6a00f66b38c",
        team_name: "DC"
    },
    {
        player_id: "21fb64c0-1822-4ffb-955a-e0e7626552ad",
        player_name: "Ishant Sharma",
        team_id: "6c9c3bd7-9015-475f-ae7b-b6a00f66b38c",
        team_name: "DC"
    },
    {
        player_id: "f743bf07-d528-449c-8c2c-d370ba98ef3e",
        player_name: "Chris Woakes",
        team_id: "6c9c3bd7-9015-475f-ae7b-b6a00f66b38c",
        team_name: "DC"
    },
    {
        player_id: "903a5031-eab7-4aaf-beeb-03965e5fdc01",
        player_name: "KL Rahul",
        team_id: "841a390c-53a7-4f32-97d5-dcfd743d3d5b",
        team_name: "PBKS"
    },
    {
        player_id: "23b699ca-4b2d-457b-89eb-2196bf3de58e",
        player_name: "Chris Gayle",
        team_id: "841a390c-53a7-4f32-97d5-dcfd743d3d5b",
        team_name: "PBKS"
    },
    {
        player_id: "b4e0f9d0-1ff7-4639-b962-75a49b6b4915",
        player_name: "Mayank Agarwal",
        team_id: "841a390c-53a7-4f32-97d5-dcfd743d3d5b",
        team_name: "PBKS"
    },
    {
        player_id: "33791625-9db9-45e4-8706-204bbfbaaf35",
        player_name: "Mohammed Shami",
        team_id: "841a390c-53a7-4f32-97d5-dcfd743d3d5b",
        team_name: "PBKS"
    },
    {
        player_id: "efd3f6ba-284b-42e4-a338-bf149e3fd2cc",
        player_name: "Nicholas Pooran",
        team_id: "841a390c-53a7-4f32-97d5-dcfd743d3d5b",
        team_name: "PBKS"
    },
    {
        player_id: "8fe10bc1-0a92-4779-bb24-445fb68f2ae4",
        player_name: "Dawid Malan",
        team_id: "841a390c-53a7-4f32-97d5-dcfd743d3d5b",
        team_name: "PBKS"
    },
    {
        player_id: "6db65ec0-ea13-4077-9330-5b51b59dff5c",
        player_name: "Deepak Hooda",
        team_id: "841a390c-53a7-4f32-97d5-dcfd743d3d5b",
        team_name: "PBKS"
    },
    {
        player_id: "bc8c65b2-ffd9-411e-a765-0c2475fa0161",
        player_name: "Arshdeep Singh",
        team_id: "841a390c-53a7-4f32-97d5-dcfd743d3d5b",
        team_name: "PBKS"
    },
    {
        player_id: "95f968b6-57ac-4344-b1ef-c69fa823ba33",
        player_name: "Ravi Bishnoi",
        team_id: "841a390c-53a7-4f32-97d5-dcfd743d3d5b",
        team_name: "PBKS"
    },
    {
        player_id: "ebc3bba8-803d-4973-a913-b913129c725d",
        player_name: "Mandeep Singh",
        team_id: "841a390c-53a7-4f32-97d5-dcfd743d3d5b",
        team_name: "PBKS"
    },
    {
        player_id: "74ac6046-02f1-473b-a395-ab77fce0a2ea",
        player_name: "Fabian Allen",
        team_id: "841a390c-53a7-4f32-97d5-dcfd743d3d5b",
        team_name: "PBKS"
    },
    {
        player_id: "38bafb33-a290-4774-a3c0-b6178327996d",
        player_name: "Sanju Samson",
        team_id: "5a6473e0-4de1-46a1-845a-4d2a55a256ad",
        team_name: "RR"
    },
    {
        player_id: "ce2ca11b-9808-493b-9f30-5382636a97c6",
        player_name: "Jos Buttler",
        team_id: "5a6473e0-4de1-46a1-845a-4d2a55a256ad",
        team_name: "RR"
    },
    {
        player_id: "7bf508ee-7abb-4d0d-b1c9-fd02ab60b5a4",
        player_name: "Ben Stokes",
        team_id: "5a6473e0-4de1-46a1-845a-4d2a55a256ad",
        team_name: "RR"
    },
    {
        player_id: "561dc03f-1c97-446c-9ba4-61ea498ada11",
        player_name: "Jofra Archer",
        team_id: "5a6473e0-4de1-46a1-845a-4d2a55a256ad",
        team_name: "RR"
    },
    {
        player_id: "1de4e9bd-8e8e-4792-a5e1-2bef2a2e15b0",
        player_name: "Riyan Parag",
        team_id: "5a6473e0-4de1-46a1-845a-4d2a55a256ad",
        team_name: "RR"
    },
    {
        player_id: "36f06b64-c584-479c-b261-8f5668499c8e",
        player_name: "Chris Morris",
        team_id: "5a6473e0-4de1-46a1-845a-4d2a55a256ad",
        team_name: "RR"
    },
    {
        player_id: "7bb59ff0-91db-4803-96e8-c12edbfaec7a",
        player_name: "David Miller",
        team_id: "5a6473e0-4de1-46a1-845a-4d2a55a256ad",
        team_name: "RR"
    },
    {
        player_id: "f6ae6a70-6db2-40c8-8ec4-312078f05111",
        player_name: "Shreyas Gopal",
        team_id: "5a6473e0-4de1-46a1-845a-4d2a55a256ad",
        team_name: "RR"
    },
    {
        player_id: "ee5e5854-0261-481c-8b87-c463b6bbee75",
        player_name: "Mustafizur Rahman",
        team_id: "5a6473e0-4de1-46a1-845a-4d2a55a256ad",
        team_name: "RR"
    },
    {
        player_id: "25813010-f843-461d-b4b7-5712ce7c621e",
        player_name: "Jaydev Unadkat",
        team_id: "5a6473e0-4de1-46a1-845a-4d2a55a256ad",
        team_name: "RR"
    },
    {
        player_id: "ffea7c52-1ffb-4aeb-a52a-983af431e9de",
        player_name: "Yashasvi Jaiswal",
        team_id: "5a6473e0-4de1-46a1-845a-4d2a55a256ad",
        team_name: "RR"
    }
];

const matches = [
    {
        match_id: "f33d6c0a-9c2a-40e1-b7b2-7d1f8f4e5a8d",
        team1_id: "9f51258e-65e7-4e2a-af50-764c04d50b99",
        team2_id: "af958d8a-9e01-4f0b-8bc7-525b96f26041",
        team1_name: "RCB",
        team2_name: "CSK",
        match_time: new Date("11/7/2023 7:30 pm"),
        contest_amount: 100,
        slots: 10,
        score: "RCB 150/5, CSK 140/8",
        result: "RCB won by 10 runs",
        match_type: "past"
    },
    {
        match_id: "ae09f1a7-3a0e-4429-94cc-0eb6933ac292",
        team1_id: "c29ea6da-8f60-49c4-b508-47761b7fca42",
        team2_id: "eb3100bf-ecc5-4c17-9a14-eeeb12b4d5a3",
        team1_name: "MI",
        team2_name: "KKR",
        match_time: new Date("11/23/2023 3:30 pm"),
        contest_amount: 50,
        slots: 8,
        score: "MI 180/3, KKR 160/9",
        result: "pending",
        match_type: "live"
    },
    {
        match_id: "c0a68e6f-40a1-4a2c-8e07-efcdcf01a936",
        team1_id: "d13c5f5b-bfe9-41ef-8be4-bbe4976b1c33",
        team2_id: "6c9c3bd7-9015-475f-ae7b-b6a00f66b38c",
        team1_name: "SRH",
        team2_name: "DC",
        match_time: new Date("11/23/2023 7:30 pm"),
        contest_amount: 25,
        slots: 12,
        score: "SRH 12/1",
        result: "pending",
        match_type: "live"
    },
    {
        match_id: "f2f7247c-9c85-4e84-8da1-905c822b7a36",
        team1_id: "841a390c-53a7-4f32-97d5-dcfd743d3d5b",
        team2_id: "5a6473e0-4de1-46a1-845a-4d2a55a256ad",
        team1_name: "PBKS",
        team2_name: "RR",
        match_time: new Date("2/11/2024 3:30 pm"),
        contest_amount: 50,
        slots: 15,
        score: "",
        result: "pending",
        match_type: "upcoming"
    },
    {
        match_id: "8baf0c05-eb37-490f-9ba2-04b6a9a6d1d5",
        team1_id: "9f51258e-65e7-4e2a-af50-764c04d50b99",
        team2_id: "eb3100bf-ecc5-4c17-9a14-eeeb12b4d5a3",
        team1_name: "RCB",
        team2_name: "KKR",
        match_time: new Date("2/24/2024 7:30 pm"),
        contest_amount: 100,
        slots: 10,
        score: "",
        result: "pending",
        match_type: "upcoming"
    },
    {
        match_id: "5f9e8d7c-6b5a-4d3c-9e1f-8a7b6c5d4e3f",
        team1_id: "c29ea6da-8f60-49c4-b508-47761b7fca42",
        team2_id: "6c9c3bd7-9015-475f-ae7b-b6a00f66b38c",
        team1_name: "MI",
        team2_name: "DC",
        match_time: new Date("11/20/2023 7:30 pm"),
        contest_amount: 100,
        slots: 8,
        score: "MI 210/3, DC 190/7",
        result: "MI won by 20 runs",
        match_type: "past"
    },
    {
        match_id: "14b67365-8018-4914-bf85-5c774ef18418",
        team1_id: "d13c5f5b-bfe9-41ef-8be4-bbe4976b1c33",
        team2_id: "841a390c-53a7-4f32-97d5-dcfd743d3d5b",
        team1_name: "SRH",
        team2_name: "PBKS",
        match_time: new Date("2/13/2024 7:30 pm"),
        contest_amount: 150,
        slots: 12,
        score: "",
        result: "pending",
        match_type: "upcoming"
    },
    {
        match_id: "c2c80463-992b-4d91-91a2-8499f101c74c",
        team1_id: "5a6473e0-4de1-46a1-845a-4d2a55a256ad",
        team2_id: "9f51258e-65e7-4e2a-af50-764c04d50b99",
        team1_name: "RR",
        team2_name: "RCB",
        match_time: new Date("11/23/2023 7:30 pm"),
        contest_amount: 50,
        slots: 15,
        score: "RR 16/0",
        result: "pending",
        match_type: "live"
    },
    {
        match_id: "7b8c9d0e-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
        team1_id: "9f51258e-65e7-4e2a-af50-764c04d50b99",
        team2_id: "eb3100bf-ecc5-4c17-9a14-eeeb12b4d5a3",
        team1_name: "RCB",
        team2_name: "KKR",
        match_time: new Date("11/18/2023 3:30 pm"),
        contest_amount: 130,
        slots: 10,
        score: "RCB 200/4, KKR 190/8",
        result: "RCB won by 10 runs",
        match_type: "past"
    },
    {
        match_id: "5d9c3b1f-2053-4501-a1f3-daf7ef1c951a",
        team1_id: "d13c5f5b-bfe9-41ef-8be4-bbe4976b1c33",
        team2_id: "5a6473e0-4de1-46a1-845a-4d2a55a256ad",
        team1_name: "SRH",
        team2_name: "RR",
        match_time: new Date("1/25/2024 7:30 pm"),
        contest_amount: 110,
        slots: 12,
        score: "",
        result: "pending",
        match_type: "upcoming"
    },
    {
        match_id: "ebf1b2a3-9e22-46e8-9ef0-201f7d89ea9c",
        team1_id: "841a390c-53a7-4f32-97d5-dcfd743d3d5b",
        team2_id: "eb3100bf-ecc5-4c17-9a14-eeeb12b4d5a3",
        team1_name: "PBKS",
        team2_name: "KKR",
        match_time: new Date("1/25/2024 3:30 pm"),
        contest_amount: 80,
        slots: 8,
        score: "",
        result: "pending",
        match_type: "upcoming"
    },
    {
        match_id: "a4e385a7-1cf0-40d3-9a9f-d4a1a19fe5d8",
        team1_id: "d13c5f5b-bfe9-41ef-8be4-bbe4976b1c33",
        team2_id: "5a6473e0-4de1-46a1-845a-4d2a55a256ad",
        team1_name: "SRH",
        team2_name: "RR",
        match_time: new Date("1/25/2024 7:30 pm"),
        contest_amount: 120,
        slots: 12,
        score: "",
        result: "pending",
        match_type: "upcoming"
    },
    {
        match_id: "ca1749b2-82d1-4c48-8bfa-55c832c5f933",
        team1_id: "6c9c3bd7-9015-475f-ae7b-b6a00f66b38c",
        team2_id: "5a6473e0-4de1-46a1-845a-4d2a55a256ad",
        team1_name: "DC",
        team2_name: "RR",
        match_time: new Date("1/26/2024 7:30 pm"),
        contest_amount: 150,
        slots: 15,
        score: "",
        result: "pending",
        match_type: "upcoming"
    },
    {
        match_id: "9d3c8b12-4f7e-4c91-8e5a-6b6f8d2a7d4c",
        team1_id: "d13c5f5b-bfe9-41ef-8be4-bbe4976b1c33",
        team2_id: "eb3100bf-ecc5-4c17-9a14-eeeb12b4d5a3",
        team1_name: "SRH",
        team2_name: "KKR",
        match_time: new Date("11/21/2023 7:30 pm"),
        contest_amount: 100,
        slots: 10,
        score: "KKR 170/5, SRH 160/9",
        result: "KKR won by 10 runs",
        match_type: "past"
    },
    {
        match_id: "3d2e1f0c-a9b8-7c6d-5e4f-3a2b1c0d9e8f",
        team1_id: "c29ea6da-8f60-49c4-b508-47761b7fca42",
        team2_id: "af958d8a-9e01-4f0b-8bc7-525b96f26041",
        team1_name: "MI",
        team2_name: "CSK",
        match_time: new Date("11/22/2023 7:30 pm"),
        contest_amount: 100,
        slots: 13,
        score: "MI 190/4, CSK 180/7",
        result: "MI won by 10 runs",
        match_type: "past"
    },
    {
        match_id: "038d430b-d0a0-47a2-8aa9-7abe7f9d3341",
        team1_id: "af958d8a-9e01-4f0b-8bc7-525b96f26041",
        team2_id: "6c9c3bd7-9015-475f-ae7b-b6a00f66b38c",
        team1_name: "CSK",
        team2_name: "DC",
        match_time: new Date("1/22/2024 19:30"),
        contest_amount: 25,
        slots: 15,
        score: "",
        result: "",
        match_type: "upcoming"
    },
    // Add more matches as needed
];


module.exports = {
    users,
    transactions,
    earnings,
    teams,
    players,
    matches
}

const teamsArray = [
    {
        team_id: "9f51258e-65e7-4e2a-af50-764c04d50b99",
        team_name: "RCB",
        players_list: ["Virat Kohli", "AB de Villiers", "Yuzvendra Chahal", "Glenn Maxwell", "Mohammed Siraj", "Devdutt Padikkal", "Washington Sundar", "Kyle Jamieson", "Navdeep Saini", "Dan Christian", "Sachin Baby"]
    },
    {
        team_id: "af958d8a-9e01-4f0b-8bc7-525b96f26041",
        team_name: "CSK",
        players_list: ["MS Dhoni", "Suresh Raina", "Ravindra Jadeja", "Deepak Chahar", "Faf du Plessis", "Ambati Rayudu", "Sam Curran", "Dwayne Bravo", "Imran Tahir", "Shardul Thakur", "Ruturaj Gaikwad"]
    },
    {
        team_id: "c29ea6da-8f60-49c4-b508-47761b7fca42",
        team_name: "MI",
        players_list: ["Rohit Sharma", "Jasprit Bumrah", "Hardik Pandya", "Kieron Pollard", "Quinton de Kock", "Suryakumar Yadav", "Ishan Kishan", "Trent Boult", "Krunal Pandya", "Jayant Yadav", "Adam Milne"]
    },
    {
        team_id: "eb3100bf-ecc5-4c17-9a14-eeeb12b4d5a3",
        team_name: "KKR",
        players_list: ["Eoin Morgan", "Andre Russell", "Pat Cummins", "Shubman Gill", "Sunil Narine", "Dinesh Karthik", "Varun Chakravarthy", "Lockie Ferguson", "Nitish Rana", "Rahul Tripathi", "Prasidh Krishna"]
    },
    {
        team_id: "d13c5f5b-bfe9-41ef-8be4-bbe4976b1c33",
        team_name: "SRH",
        players_list: ["Kane Williamson", "David Warner", "Rashid Khan", "Bhuvneshwar Kumar", "Jonny Bairstow", "Manish Pandey", "Wriddhiman Saha", "Mohammad Nabi", "Sandeep Sharma", "T Natarajan", "Abdul Samad"]
    },
    {
        team_id: "6c9c3bd7-9015-475f-ae7b-b6a00f66b38c",
        team_name: "DC",
        players_list: ["Rishabh Pant", "Shikhar Dhawan", "Kagiso Rabada", "Prithvi Shaw", "Shimron Hetmyer", "Marcus Stoinis", "Steven Smith", "Axar Patel", "Amit Mishra", "Ishant Sharma", "Chris Woakes"]
    },
    {
        team_id: "841a390c-53a7-4f32-97d5-dcfd743d3d5b",
        team_name: "PBKS",
        players_list: ["KL Rahul", "Chris Gayle", "Mayank Agarwal", "Mohammed Shami", "Nicholas Pooran", "Dawid Malan", "Deepak Hooda", "Arshdeep Singh", "Ravi Bishnoi", "Mandeep Singh", "Fabian Allen"]
    },
    {
        team_id: "5a6473e0-4de1-46a1-845a-4d2a55a256ad",
        team_name: "RR",
        players_list: ["Sanju Samson", "Jos Buttler", "Ben Stokes", "Jofra Archer", "Riyan Parag", "Chris Morris", "David Miller", "Shreyas Gopal", "Mustafizur Rahman", "Jaydev Unadkat", "Yashasvi Jaiswal"]
    }
];