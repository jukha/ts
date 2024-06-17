"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const anchors = Array.from(document.querySelectorAll(".item-fancybox-item.item-link")).slice(0, 10);
        const downloadVideo = (url, index) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(url);
                if (!response.ok)
                    throw new Error(`Network response was not ok for ${url}`);
                const blob = yield response.blob();
                const a = document.createElement("a");
                a.href = URL.createObjectURL(blob);
                a.download = `video${index + 1}.mp4`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
            catch (error) {
                console.error(`Error downloading video at index ${index}:`, error);
            }
        });
        for (let index = 0; index < anchors.length; index++) {
            const url = anchors[index].href;
            yield downloadVideo(url, index);
        }
        alert("All videos have been downloaded successfully!");
    });
})();
