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
        id: "onsuku-banner-jr",
        html: `
            <a href="https://px.a8.net/svt/ejp?a8mat=4BEJHD+G53376+4R8G+BYT9D" rel="nofollow">
            <img border="0" width="300" height="250" alt="" src="https://www22.a8.net/svt/bgt?aid=261018913976&wid=001&eno=01&mid=s00000022192002010000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4BEJHD+G53376+4R8G+BYT9D" alt="">
        `
    },
    {
        id: "onsuku-banner-partyparty1",
        html: `
            <a href="https://px.a8.net/svt/ejp?a8mat=4BEJHD+4EDBOY+FOG+3HOTIP" rel="nofollow">
            <img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=261018913266&wid=001&eno=01&mid=s00000002032021111000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4BEJHD+4EDBOY+FOG+3HOTIP" alt="">
        `
    },
    {
        id: "onsuku-banner-partyparty2",
        html: `
            <a href="https://px.a8.net/svt/ejp?a8mat=4BEJHD+4EDBOY+FOG+3H9DYP" rel="nofollow">
            <img border="0" width="468" height="60" alt="" src="https://www21.a8.net/svt/bgt?aid=261018913266&wid=001&eno=01&mid=s00000002032021039000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4BEJHD+4EDBOY+FOG+3H9DYP" alt="">
        `
    },
    {
        id: "onsuku-banner-fiole1",
        html: `
            <a href="https://px.a8.net/svt/ejp?a8mat=4BEJHC+E0VLRM+2RIS+65EOH" rel="nofollow">
            <img border="0" width="300" height="250" alt="" src="https://www28.a8.net/svt/bgt?aid=261018912848&wid=001&eno=01&mid=s00000012898001033000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4BEJHC+E0VLRM+2RIS+65EOH" alt="">
        `
    },
    {
        id: "onsuku-banner-fiole2",
        html: `
            <a href="https://px.a8.net/svt/ejp?a8mat=4BEJHC+E0VLRM+2RIS+60OXD" rel="nofollow">
            <img border="0" width="468" height="60" alt="" src="https://www28.a8.net/svt/bgt?aid=261018912848&wid=001&eno=01&mid=s00000012898001011000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4BEJHC+E0VLRM+2RIS+60OXD" alt="">
        `
    },
    {
        id: "onsuku-banner-otocon",
        html: `
            <a href="https://px.a8.net/svt/ejp?a8mat=4BEJHC+EPADKI+1J1E+6DRLT" rel="nofollow">
            <img border="0" width="300" height="250" alt="" src="https://www25.a8.net/svt/bgt?aid=261018912889&wid=001&eno=01&mid=s00000007133001072000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4BEJHC+EPADKI+1J1E+6DRLT" alt="">
        `
    },
    {
        id: "onsuku-banner-ladymaneyseminor1",
        html: `
            <a href="https://px.a8.net/svt/ejp?a8mat=4BEET3+E97O8I+3JHQ+HWPVL" rel="nofollow">
            <img border="0" width="468" height="60" alt="" src="https://www23.a8.net/svt/bgt?aid=261012855862&wid=001&eno=01&mid=s00000016523003008000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4BEET3+E97O8I+3JHQ+HWPVL" alt="">
        `
    },
    {
        id: "onsuku-banner-ladymaneyseminor2",
        html: `
            <a href="https://px.a8.net/svt/ejp?a8mat=4BEET3+E97O8I+3JHQ+HWI5T" rel="nofollow">
            <img border="0" width="300" height="250" alt="" src="https://www25.a8.net/svt/bgt?aid=261012855862&wid=001&eno=01&mid=s00000016523003007000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4BEET3+E97O8I+3JHQ+HWI5T" alt="">
        `
    },
    {
        id: "onsuku-banner-shashin",
        html: `
            <a href="https://px.a8.net/svt/ejp?a8mat=4BEJHD+4M3YK2+515E+5ZMCH" rel="nofollow">
            <img border="0" width="300" height="250" alt="" src="https://www23.a8.net/svt/bgt?aid=261018913279&wid=001&eno=01&mid=s00000023477001006000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4BEJHD+4M3YK2+515E+5ZMCH" alt="">
        `
    },
    {
        id: "onsuku-banner-QOO101",
        html: `
            <a href="https://px.a8.net/svt/ejp?a8mat=4BEJHD+5MFEGI+4QYG+61RI9" rel="nofollow">
            <img border="0" width="468" height="60" alt="" src="https://www24.a8.net/svt/bgt?aid=261018913340&wid=001&eno=01&mid=s00000022156001016000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4BEJHD+5MFEGI+4QYG+61RI9" alt="">
        `
    },
    {
        id: "onsuku-banner-QOO102",
        html: `
            <a href="https://px.a8.net/svt/ejp?a8mat=4BEJHD+5MFEGI+4QYG+65EOH" rel="nofollow">
            <img border="0" width="300" height="300" alt="" src="https://www21.a8.net/svt/bgt?aid=261018913340&wid=001&eno=01&mid=s00000022156001033000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4BEJHD+5MFEGI+4QYG+65EOH" alt="">
        `
    },
    {
        id: "onsuku-banner-agoda",
        html: `
            <a href="https://px.a8.net/svt/ejp?a8mat=4BEJHD+FA4JQQ+4X1W+NUMHT" rel="nofollow">
            <img border="0" width="640" height="340" alt="" src="https://www26.a8.net/svt/bgt?aid=261018913924&wid=001&eno=01&mid=s00000022946004006000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4BEJHD+FA4JQQ+4X1W+NUMHT" alt="">
        `
    },
    {
        id: "onsuku-banner-travelist",
        html: `
            <a href="https://px.a8.net/svt/ejp?a8mat=4BEJHD+FTRUPE+4XZI+HVNAP" rel="nofollow">
            <img border="0" width="300" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=261018913957&wid=001&eno=01&mid=s00000023067003003000&mc=1"></a>
            <img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=4BEJHD+FTRUPE+4XZI+HVNAP" alt="">
        `
    },
    {
        id: "onsuku-banner-s",
        html: `
            <a href="https://px.a8.net/svt/ejp?a8mat=4BEJHE+RZE7M+1WP2+15Q22P" rel="nofollow">
                <img border="0" width="468" height="60" alt="" src="https://www24.a8.net/svt/bgt?aid=261018914047&wid=001&eno=01&mid=s00000008903007008000&mc=1">
            </a>
            <img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4BEJHE+RZE7M+1WP2+15Q22P" alt="">
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
