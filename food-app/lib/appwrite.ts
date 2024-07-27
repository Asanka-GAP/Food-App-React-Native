import { Account,Client, ID } from 'react-native-appwrite';

export const config ={
    endpoint:'https://cloud.appwrite.io/v1',
    platform:'com.gap.foodiefiesta',
    projectId: '66a4fcbb003a23268c0a',
    databaseId: '66a4fe97002beb51e745',
    userCollectionId: '66a4fecf00291b055ba3',
    foodCollectionId: '66a4ff3d0016e1651c98',
    storageId: '66a50155002a5f8a170b'

}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);

export const createUser = ()=>{
// Register User
account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });

}

