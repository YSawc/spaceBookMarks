<script type="text/javascript">
	function Init() {
		setInterval ("checkFocus ()", 300);
	}

	function checkFocus ()) {
		if (!document.hasFocus()) {
			document.location.reload();
		}
	}
</script>
