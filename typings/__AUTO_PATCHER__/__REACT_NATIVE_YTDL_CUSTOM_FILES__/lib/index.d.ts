export default ytdl;
/**
 * @param {string} link
 * @param {!Object} options
 * @returns {Promise<Array.<Object>>}
 */
declare function ytdl(link: string, options: Object): Promise<Array<Object>>;
declare namespace ytdl {
    const getBasicInfo: any;
    const getInfo: any;
    const chooseFormat: any;
    const filterFormats: any;
    const validateID: any;
    const validateURL: any;
    const getURLVideoID: any;
    const getVideoID: any;
    namespace cache {
        const sig: any;
        const info: any;
        const cookie: any;
    }
}
