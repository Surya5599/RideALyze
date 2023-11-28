$(document).ready(function () {
	backupCheck();
	//console.log(" backup called")
});

var hostname = window.location.origin + "/"
console.log(window.location.origin);
function backupCheck() {
	var url = hostname + "checkBackup";
	$.get(url, function (data) {
			if (data == true) {
					var modal = document.getElementById("myModal");
					modal.style.display = "block";
					var span = document.getElementsByClassName("close")[0];
					span.onclick = function () {
							var url = hostname + "noBackup";
							$.get(url)
							modal.style.display = "none";
					}
					$("#backupNo").click(function () {
							var url = hostname + "noBackup";
							$.get(url);
							modal.style.display = "none";
					});
					$("#backupYes").click(function () {
							var url = hostname + "getBackup";
							$.get(url);
							modal.style.display = "none";
					});
			} else {
					var url = hostname + "noBackup";
					$.get(url);
			}
	});
}

function saveBackup() {
	//console.log("SAVING");
	var url = hostname + "exportData";
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
	var url = hostname + "deleteBackup";
	$.get(url, function (data) {
			if (data) {
					showPopUp("Backup Data file deleted.");
			} else {
					showPopUp("No Backup to delete.");
			}
	});
}

