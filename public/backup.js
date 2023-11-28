$(document).ready(function () {
	backupCheck();
	//console.log(" backup called")
});
function backupCheck() {
	var url = "https://ride-a-lyze.onrender.com/checkBackup";
	$.get(url, function (data) {
			if (data == true) {
					var modal = document.getElementById("myModal");
					modal.style.display = "block";
					var span = document.getElementsByClassName("close")[0];
					span.onclick = function () {
							var url = "https://ride-a-lyze.onrender.com/noBackup";
							$.get(url)
							modal.style.display = "none";
					}
					$("#backupNo").click(function () {
							var url = "https://ride-a-lyze.onrender.com/noBackup";
							$.get(url);
							modal.style.display = "none";
					});
					$("#backupYes").click(function () {
							var url = "https://ride-a-lyze.onrender.com/getBackup";
							$.get(url);
							modal.style.display = "none";
					});
			} else {
					var url = "https://ride-a-lyze.onrender.com/noBackup";
					$.get(url);
			}
	});
}

function saveBackup() {
	//console.log("SAVING");
	var url = "https://ride-a-lyze.onrender.com/exportData";
	$.get(url, function (data) {
			if (data == true) {
					showPopUp("Backup Completed!");
			} else {
					showPopUp("There was an error processing your backup. Please try again.");
			}
	});
}

function deleteBackup() {
	//console.log("Deleting");
	var url = "https://ride-a-lyze.onrender.com/deleteBackup";
	$.get(url, function (data) {
			if (data) {
					showPopUp("Backup Data file deleted.");
			} else {
					showPopUp("No Backup to delete.");
			}
	});
}

