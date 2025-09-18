// tests/setup/globalSetup.js
import { saveLoginState } from '../utils/sessionHandling.js';

export default async function globalSetup() {
  console.log('Creating login session...');
  await saveLoginState();
  console.log('Login session saved in storageState.json');
}

