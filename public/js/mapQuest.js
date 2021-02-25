function initMap() {
	L.mapquest.key = '60XGglIRrRSTU9m8v4QyVjJIICrOAnYA';
	var map = L.mapquest.map('map', {
		center: [32.878727518238684, -117.23583235867751],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});
	L.marker([32.878727518238684, -117.23583235867751]).addTo(map);
}