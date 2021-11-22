const limitLoad = (urls: any, handler: any, limit: number) => {
    const sequence: any[] = [].concat(urls);
    const promises = sequence.splice(0, limit).map((url, index) => {
        return handler(url)
            .then(() => {
                return index;
            })
            .catch((err: Error) => {
                console.log(err);
            });
    });

    return sequence
        .reduce((pCollect, url) => {
            return pCollect
                .then(() => {
                    return Promise.race(promises);
                })
                .then((fastestIndex: number) => {
                    promises[fastestIndex] = handler(url).then(() => {
                        return fastestIndex;
                    });
                })
                .catch((err: number) => {
                    console.error(err);
                });
        }, Promise.resolve())
        .then(() => {
            return Promise.all(promises);
        });
};

export default limitLoad;
