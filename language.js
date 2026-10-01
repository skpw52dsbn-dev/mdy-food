function renderLanguageSelector(target) {
    try {
        // 兼容：
        // renderLanguageSelector("languageSelector")
        // renderLanguageSelector(document.getElementById("languageSelector"))
        let container = target;

        if (typeof target === "string") {
            container = document.getElementById(target);
        }

        if (!container) {
            console.warn(
                "语言选择器目标不存在:",
                target
            );
            return;
        }

        const currentLanguage = getLanguage();

        const languageNames = {
            zh: "中文",
            my: "မြန်မာ",
            en: "English"
        };

        container.innerHTML = "";

        const wrapper = document.createElement("div");

        wrapper.className = "mdy-language-selector";

        wrapper.style.display = "inline-flex";
        wrapper.style.alignItems = "center";
        wrapper.style.gap = "6px";

        const select = document.createElement("select");

        select.className = "mdy-language-select";

        select.id = "mdyLanguageSelect";

        select.style.padding = "7px 12px";
        select.style.borderRadius = "8px";
        select.style.border = "1px solid #ddd";
        select.style.background = "#fff";
        select.style.cursor = "pointer";
        select.style.fontSize = "14px";
        select.style.outline = "none";

        SUPPORTED_LANGUAGES.forEach(function (lang) {
            const option = document.createElement("option");

            option.value = lang;

            option.textContent =
                languageNames[lang] || lang;

            if (lang === currentLanguage) {
                option.selected = true;
            }

            select.appendChild(option);
        });

        select.addEventListener(
            "change",
            function () {
                const selectedLanguage = this.value;

                if (
                    SUPPORTED_LANGUAGES.includes(
                        selectedLanguage
                    )
                ) {
                    setLanguage(selectedLanguage);
                }
            }
        );

        wrapper.appendChild(select);

        container.appendChild(wrapper);

    } catch (error) {
        console.error(
            "语言选择器加载失败:",
            error
        );
    }
}
