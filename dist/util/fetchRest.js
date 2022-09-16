"use strict";
const fetchRest = async (url, options = {}, retries = 5, retryTime = 1000, retryMethod = "long", maxRetryTime = 100000, retryOnNetworkError = true) => {
    let forceStopRetry = false;
    try {
        const res = await fetch(url, options);
        if (res.ok) {
            const isJson = res.headers
                .get("content-type")
                .includes("application/json");
            let data;
            data = isJson ? await res.json() : null;
            return data;
        }
        if (retries > 0 && res.status >= 500) {
            await new Promise((resolve) => setTimeout(resolve, retryTime));
            retryMethod === "long"
                ? (retryTime = retryTime * 3)
                : (retryTime = retryTime * 2);
            retryTime = retryTime > maxRetryTime ? maxRetryTime : retryTime;
            return fetchRest(url, options, retries - 1, retryTime, retryMethod);
        }
        let error = res.status;
        forceStopRetry = true;
        throw new Error(error);
    }
    catch (error) {
        if (retryOnNetworkError && !forceStopRetry && retries > 0) {
            await new Promise((resolve) => setTimeout(resolve, retryTime));
            retryMethod === "long"
                ? (retryTime = retryTime * 3)
                : (retryTime += retryTime * 2);
            retryTime = retryTime > maxRetryTime ? maxRetryTime : retryTime;
            return fetchRest(url, options, retries - 1, retryTime, retryMethod);
        }
        else {
            throw new Error(error);
        }
    }
};
module.exports = fetchRest;
//# sourceMappingURL=fetchRest.js.map