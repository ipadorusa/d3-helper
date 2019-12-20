// util helper
import { Init } from '@saramin/ui-helper';
import * as d3 from "D3";
const log = console.log;

const svgCheck = {
	'status' : !!(document.createElementNS && document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect)
};
const svgNotMsg = (el) => el.innerHTML = '<p class="svg_not_supported">SVG를 지원하지 않는 브라우저입니다.</p>';

const d3Remove = target => d3.select(target).select("svg").remove();
const makecomma = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const sumTotal = (d, data) => {
	const total = d3.sum(data.map(dataItem => dataItem.value));
	const percent = Math.round(1e3 * d.data.value / total) / 10;
	return percent + '%';
};

const getDigit = function(num) {
	num = num.toString();
	let i=0;
	while(num[i]){
		i++
	};
	return i;
};
const numXnum = function (num) {
	let result = 1;
	for(let i=num;i>1;i--) {
		result *= 10;
	}
	return result;
};

// export
export {
	Init,
	d3Remove,
	log,
	makecomma,
	sumTotal,
	d3,
	svgCheck,
	getDigit,
	numXnum,
	svgNotMsg
}
