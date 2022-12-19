// This is "probably" IE9 compatible but will need some fallbacks for IE8
// - (event listeners, forEach loop)

// 전체 페이지 로드가 완료될 때까지 기다림
window.addEventListener('load', function() {
	
	// 실제 페이지를 시뮬레이션하기 위해 setTimeout
	setTimeout(lazyLoad, 1000);
	
});

function lazyLoad() {
	var card_images = document.querySelectorAll('.card-image');
	
	// 각 카드 이미지를 반복
	card_images.forEach(function(card_image) {
		var image_url = card_image.getAttribute('data-image-full');
		var content_image = card_image.querySelector('img');
		
		// 이미지의 src를 변경하여 새 고해상도 사진을 로드
		content_image.src = image_url;
		
		// 새 사진 로드가 완료되면 로드 이벤트를 수신
		content_image.addEventListener('load', function() {
			// 보이는 배경 이미지를 다운로드된 새 사진으로 교체하세요
			card_image.style.backgroundImage = 'url(' + image_url + ')';
		});
		
	});
	
}