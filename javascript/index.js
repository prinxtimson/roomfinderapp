function room(roomNum){
	this.rooms = data.rooms;
	this.roomNum = roomNum;

	room.prototype.isAvailable = function(){
		for(i=0; i<rooms.length; i++){
			if(rooms[i].isavailable == 'true'){
			document.write(room[i].name);
			}
		}
	}

	room.prototype.checkIn = function(roomNum){
		rooms[roomNum].isAvailable = false;
	}

	room.prototype.checkOut = function(roomNum){
		rooms[roomNum].isAvailable = true;
	}
}

hulls.prototype = new room();
hulls.prototype.constructor = hulls;

meetingsRoom.prototype = new room();
meetingsRoom.prototype.constructor = meetingsRoom;
