import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Menu } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Menu />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<link place={"endOfHead"} rawKey={"6011551a5c7a2e9ce1fb1dd7"} />
			<script async={true} place={"endOfBody"} rawKey={"601155222e16c204ed7e3b0e"}>
				{"alert(\"Привет я сайт\")"}
			</script>
			<style place={"endOfHead"} rawKey={"60115553e7fe806a3b623f52"}>
				{"body\n{background-color:red}"}
			</style>
			<meta name={"keywords"} content={"тут мета теги лежат ключ слова"} place={"endOfHead"} rawKey={"6011558de003a461d8bb2190"} />
		</RawHtml>
	</Theme>;
});