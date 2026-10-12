// 広告の倉庫（新しいASPタグやバナーをここにどんどん追加できます）
const adList = [
    {
        id: "banner-tossy",
        html: `
            <a href="https://px.a8.net/svt/ejp?a8mat=4BEET1+AO0LYQ+1WP2+1HNSR5" rel="nofollow" target="_blank">
                <img border="0" width="300" height="250" alt="" src="https://www22.a8.net/svt/bgt?aid=261012853645&wid=001&eno=01&mid=s00000008903009013000&mc=1">
            </a>
            <img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4BEET1+AO0LYQ+1WP2+1HNSR5" alt="">
        `
    },
    {
        id: "text-tossy",
        html: `
            <a href="https://px.a8.net/svt/ejp?a8mat=4BEET1+AO0LYQ+1WP2+1HMIGI" rel="nofollow" target="_blank" class="hover:underline">【PR】ウルトラ投資アプリ【TOSSY】お得な特典が盛りだくさん！</a>
            <img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4BEET1+AO0LYQ+1WP2+1HMIGI" alt="">
        `
    },
    {
        id: "rakuten-item",
        html: `
            <a href="https://rpx.a8.net/svt/ejp?a8mat=4BEET1+AMTQR6+2HOM+656YP&rakuten=y&a8ejpredirect=http%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F0ea62065.34400275.0ea62066.204f04c0%2Fa26101269667_4BEET1_AMTQR6_2HOM_656YP%3Fpc%3Dhttp%253A%252F%252Fwww.rakuten.co.jp%252F%26m%3Dhttp%253A%252F%252Fm.rakuten.co.jp%252F" rel="nofollow" target="_blank">
                <img src="http://hbb.afl.rakuten.co.jp/hsb/0ec09ba3.bc2429d5.0eb4bbaa.95151395/" border="0">
            </a>
            <img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4BEET1+AMTQR6+2HOM+656YP" alt="">
        `
    },
    {
        id: "onsuku-banner-large",
        html: `
            <a href="https://px.a8.net/svt/ejp?a8mat=4BEET1+DBVECY+5ULO+5YZ75" rel="nofollow" target="_blank">
                <img border="0" width="300" height="250" alt="" src="https://www27.a8.net/svt/bgt?aid=261012853806&wid=001&eno=01&mid=s00000027294001003000&mc=1">
            </a>
            <img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4BEET1+DBVECY+5ULO+5YZ75" alt="">
        `
    },
    {
        id: "onsuku-text",
        html: `
            <a href="https://px.a8.net/svt/ejp?a8mat=4BEET1+DNS2GI+408S+5YJRM" rel="nofollow" target="_blank" class="hover:underline">様々な資格学習が1078円でウケホーダイ！【オンスク.JP】</a>
            <img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=4BEET1+DNS2GI+408S+5YJRM" alt="">
        `
    },
    {
        id: "onsuku-banner-small",
        html: `
            <a href="https://px.a8.net/svt/ejp?a8mat=4BEET1+DNS2GI+408S+5ZEMP" rel="nofollow" target="_blank">
                <img border="0" width="320" height="50" alt="" src="https://www27.a8.net/svt/bgt?aid=261012853826&wid=001&eno=01&mid=s00000018694001005000&mc=1">
            </a>
            <img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4BEET1+DNS2GI+408S+5ZEMP" alt="">
        `
    },
    {
        id: "onsuku-banner-300",
        html: `
            <a href="https://px.a8.net/svt/ejp?a8mat=4BEET1+DOYXO2+3L4C+601S1" rel="nofollow" target="_blank">
                <img border="0" width="300" height="250" alt="" src="https://www29.a8.net/svt/bgt?aid=261012853828&wid=001&eno=01&mid=s00000016734001008000&mc=1">
            </a>
            <img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=4BEET1+DOYXO2+3L4C+601S1" alt="">
        `
    }
];

// リストの中からランダムに1つ選んで返す関数
function getRandomAd() {
    if (!adList || adList.length === 0) return "";
    const randomIndex = Math.floor(Math.random() * adList.length);
    return adList[randomIndex].html;
}