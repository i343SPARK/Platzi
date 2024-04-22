extends CharacterBody2D

var speed = 600

@onready var ball = get_parent().find_child("Ball")

func _physics_process(delta):
	velocity.y = _getDirection() * speed
	
	move_and_collide(velocity * delta)

func _getDirection():
	if abs(ball.position.y - position.y) > 25:
		if ball.position.y > position.y:
			return 1
			
		else:
			return -1
	else:
		return 0
