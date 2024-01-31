export default ytdl;
/**
 * @param {string} link
 * @param {!Object} options
 * @returns {Promise<Array.<Object>>}
 */
declare function ytdl(link: string, options: Object): Promise<Array<Object>>;
declare namespace ytdl {
    const getBasicInfo: (id: string, options: Object) => Promise<Object>;
    const getInfo: (id: string, options: Object) => Promise<Object>;
    const chooseFormat: (formats: Object[], options: Object) => Object;
    const filterFormats: (formats: Object[], filter: Function) => Object[];
    const validateID: (id: any) => boolean;
    const validateURL: (string: string) => boolean;
    const getURLVideoID: (link: any) => any;
    const getVideoID: (str: any) => any;
    namespace cache {
        const sig: import("./cache");
        const info: import("./cache");
        const cookie: import("./cache");
    }
}
