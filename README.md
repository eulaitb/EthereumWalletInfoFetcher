# Ethereum Wallet Info Fetcher

To use the ethers.js library in JavaScript, you first need to install the library using npm. In your project, run the command:  

```bash
npm install ethers
```

1. Installing the dotenv library:

Open a terminal and run the command:
  ```bash
  npm install dotenv
  ```

2. Creating the .env file:

  - In the root of your project, create a file called .env.
  - Open the .env file and add the following lines to it:
  ```env
  PRIVATE_KEY=Your_private_key
  INFURA_API_KEY=Your_API_key_from_Infura
  ```

3. Launch your application:

Execute your script in the terminal:
  ```bash
  node main.js
  ```

4. Security:
   Ensure that the `.env` file is stored securely and prevent it from becoming open source.
