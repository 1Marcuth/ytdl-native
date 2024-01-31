export namespace transformer {
    function getTransformOptions(): Promise<{
        transform: {
            experimentalImportSupport: boolean;
            inlineRequires: boolean;
        };
    }>;
}
