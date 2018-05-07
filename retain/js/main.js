$(function () {
	localStorage.clear();

	// model
	var model = {
		init: function () {
			if (!localStorage.notes) {
				localStorage.notes = JSON.stringify([]);
			}

		},
		add: function (obj) {
			var data = JSON.parse(localStorage.notes);
			data.push(obj);
			localStorage.notes = JSON.stringify(data);
		},
		getAllNotes: function () {
			return JSON.parse(localStorage.notes);
		}
	};

	// octopus
	var octopus = {
		addNewNote: function (noteStr) {

			var nowDate = new Date();

			var newNoteDate = `${nowDate.getFullYear()}/${nowDate.getMonth() + 1}/${nowDate.getDate()}/${nowDate.getHours()}/${nowDate.getMinutes()}`;

			model.add({
				content: noteStr,
				date: newNoteDate
			});
			view.render();
		},

		getNotes: function () {
			// 改变显示顺序
			return model.getAllNotes().reverse();
		},

		init: function () {
			model.init();
			view.init();
		}
	};

	// view
	var view = {
		init: function () {
			this.noteList = $('#notes');
			var newNoteForm = $('#new-note-form');
			var newNoteContent = $('#new-note-content');

			newNoteForm.submit(function (e) {
				octopus.addNewNote(newNoteContent.val());
				newNoteContent.val('');
				e.preventDefault();
			});
			view.render();
		},
		render: function () {
			var htmlStr = '';
			octopus.getNotes().forEach(function (note) {
				htmlStr += '<li class="note">' + '<span class="note-date">' + note.date + '</span>' + note.content + '</li>';
			});
			this.noteList.html(htmlStr);
		}
	};

	octopus.init();
});