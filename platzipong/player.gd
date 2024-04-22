extends CharacterBody2D

var SPEED = 400.0

func _physics_process(delta):
	var directionV = Input.get_axis("ui_up", "ui_down")
	#var directionH = Input.get_axis("ui_left", "ui_right")
	velocity.y = directionV * SPEED
	#velocity.x = directionH * SPEED
	
	move_and_collide(velocity * delta)
