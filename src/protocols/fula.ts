import Fula from '../interfaces/fulaNativeModule';

/**
 * Get gets the value corresponding to the given key from the local datastore.
// The key must be a valid ipld.Link.
 * @param config
 * @returns boolean
 */
export const init = (
  identity: string | null, //privateKey of did identity
  storePath: string | null,
  bloxAddr: string,
): Promise<[string]> => {
  console.log('init in react-native started',identity, storePath, bloxAddr);
  return Fula.init(identity, storePath, bloxAddr);
};

/**
 * Get gets the value corresponding to the given key from the local datastore.
// The key must be a valid ipld.Link.
 * @param key
 * @returns value
 */
export const get = (key: string): Promise<string> => {
  return Fula.get(key);
};

/**
 * Has checks whether the value corresponding to the given key is present in the local datastore.
// The key must be a valid ipld.Link.
 * @param key
 * @returns boolean
 */
export const has = (key: Uint8Array): Promise<boolean> => {
  return Fula.has(key);
};

/**
 * Push requests the given addr to download the root cid from this node.
// The addr must be a valid multiaddr that includes peer ID.
// this function.
 * @param addr
 * @returns null or error
 */
export const push = (): Promise<string> => {
  return Fula.push();
};

/**
 * Put stores the given key value onto the local datastore.
// The key must be a valid ipld.Link and the value must be the valid encoded ipld.Node corresponding
// to the given key.
 * @param key, value
 * @returns null or string
 */
export const put = (value: string, codec: string): Promise<string> => {
  return Fula.put(value, codec);
};

/**
 * mkdir creates a directory at the given path.
 * @param path
 * @returns string: new cid of the root
 */
export const mkdir = (path: string): Promise<string> => {
  return Fula.mkdir(path);
};

/**
 * writeFile writes content at a given path
 * @param path
 * @returns string: new cid of the root
 */
export const writeFileLocal = (path: string, content: string): Promise<string> => {
  return Fula.writeFileLocal(path, content);
};

/**
 * ls lists the name of files and folders at a given path
 * @param path
 * @returns string: list of items 
 * TODO: Findout how is the string and convert to array
 */
 export const ls = (path: string): Promise<string> => {
  return Fula.ls(path);
};

/**
 * readFile reads content of a given path
 * @param path
 * @returns string: cotent
 */
 export const readFile = (path: string): Promise<string> => {
  return Fula.readFile(path);
};

/**
 * Shutdown closes all resources used by Client.
// After calling this function Client must be discarded.
 * @param
 * @returns
 */
export const shutdown = (): Promise<void> => {
  return Fula.shutdown();
};
