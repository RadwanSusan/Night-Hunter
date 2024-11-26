// main.js
class Game {
	static SVGAssets = {
		player: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			 <defs>
				  <radialGradient id="playerGlow" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stop-color="#9f7aea"/>
						<stop offset="100%" stop-color="#6b46c1"/>
				  </radialGradient>
				  <filter id="playerShadow">
						<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
						<feOffset dx="0" dy="0" result="offsetblur"/>
						<feFlood flood-color="#4c1d95"/>
						<feComposite in2="offsetblur" operator="in"/>
						<feMerge>
							 <feMergeNode/>
							 <feMergeNode in="SourceGraphic"/>
						</feMerge>
				  </filter>
			 </defs>
			 <circle cx="50" cy="50" r="45" fill="url(#playerGlow)" filter="url(#playerShadow)"/>
			 <circle cx="50" cy="50" r="35" fill="#805ad5"/>
			 <path d="M50 25v50M25 50h50" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
			 <circle cx="50" cy="50" r="15" fill="#4c1d95"/>
		</svg>`,
		basicEnemy: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			 <defs>
				  <radialGradient id="enemyGlow" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stop-color="#fc8181"/>
						<stop offset="100%" stop-color="#e53e3e"/>
				  </radialGradient>
			 </defs>
			 <circle cx="50" cy="50" r="45" fill="url(#enemyGlow)"/>
			 <circle cx="50" cy="50" r="35" fill="#e53e3e"/>
			 <g transform="rotate(45 50 50)">
				  <path d="M30 30l40 40M30 70l40-40" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
			 </g>
			 <circle cx="50" cy="50" r="12" fill="#fff" opacity="0.6"/>
		</svg>`,
		fastEnemy: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			 <defs>
				  <linearGradient id="speedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stop-color="#9f7aea"/>
						<stop offset="100%" stop-color="#805ad5"/>
				  </linearGradient>
			 </defs>
			 <circle cx="50" cy="50" r="45" fill="url(#speedGrad)"/>
			 <path d="M20 50h45" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
			 <path d="M55 30l25 20l-25 20" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
			 <circle cx="50" cy="50" r="20" fill="#6b46c1" opacity="0.6"/>
			 <path d="M15 40q35 10 70 0" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
			 <path d="M15 60q35-10 70 0" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
		</svg>`,
		tankEnemy: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			 <defs>
				  <linearGradient id="tankGrad" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stop-color="#4299e1"/>
						<stop offset="100%" stop-color="#2b6cb0"/>
				  </linearGradient>
			 </defs>
			 <circle cx="50" cy="50" r="45" fill="url(#tankGrad)"/>
			 <rect x="30" y="30" width="40" height="40" fill="#2b6cb0" rx="5"/>
			 <rect x="35" y="35" width="30" height="30" fill="#ffffff" rx="3"/>
			 <path d="M25 25l50 50M25 75l50-50" stroke="#4299e1" stroke-width="8" stroke-linecap="round" opacity="0.3"/>
		</svg>`,
		healthPowerup: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			 <defs>
				  <radialGradient id="healthGlow" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stop-color="#68d391"/>
						<stop offset="100%" stop-color="#48bb78"/>
				  </radialGradient>
			 </defs>
			 <circle cx="50" cy="50" r="45" fill="url(#healthGlow)"/>
			 <path d="M50 20v60M20 50h60" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
			 <circle cx="50" cy="50" r="15" fill="#ffffff" opacity="0.4"/>
			 <path d="M30 30h40v40h-40z" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.3"/>
		</svg>`,
		damagePowerup: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			 <defs>
				  <linearGradient id="damageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stop-color="#fc8181"/>
						<stop offset="100%" stop-color="#e53e3e"/>
				  </linearGradient>
			 </defs>
			 <circle cx="50" cy="50" r="45" fill="url(#damageGrad)"/>
			 <path d="M25 25l50 50M25 75l50-50" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
			 <circle cx="50" cy="50" r="20" fill="#ffffff" opacity="0.3"/>
			 <path d="M40 40l20 20M40 60l20-20" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
		</svg>`,
		speedPowerup: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			 <defs>
				  <linearGradient id="speedPowerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stop-color="#63b3ed"/>
						<stop offset="100%" stop-color="#4299e1"/>
				  </linearGradient>
			 </defs>
			 <circle cx="50" cy="50" r="45" fill="url(#speedPowerGrad)"/>
			 <path d="M15 50h55M60 30l25 20l-25 20" stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
			 <circle cx="50" cy="50" r="15" fill="#ffffff" opacity="0.3"/>
			 <path d="M10 35q40 10 80 0M10 65q40-10 80 0" stroke="#ffffff" stroke-width="3" opacity="0.3"/>
		</svg>`,
		fireratePowerup: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			 <defs>
				  <linearGradient id="fireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stop-color="#9f7aea"/>
						<stop offset="100%" stop-color="#805ad5"/>
				  </linearGradient>
			 </defs>
			 <circle cx="50" cy="50" r="45" fill="url(#fireGrad)"/>
			 <path d="M25 50c25-30 25 30 50 0" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
			 <path d="M20 35c30-20 30 20 60 0" stroke="#ffffff" stroke-width="4" stroke-linecap="round" opacity="0.5"/>
			 <path d="M20 65c30-20 30 20 60 0" stroke="#ffffff" stroke-width="4" stroke-linecap="round" opacity="0.5"/>
		</svg>`,
		projectile: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			 <defs>
				  <radialGradient id="projectileGlow" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stop-color="#ffffff"/>
						<stop offset="100%" stop-color="#9f7aea"/>
				  </radialGradient>
				  <filter id="projectileBlur">
						<feGaussianBlur stdDeviation="2"/>
				  </filter>
			 </defs>
			 <circle cx="50" cy="50" r="45" fill="url(#projectileGlow)" filter="url(#projectileBlur)"/>
			 <circle cx="50" cy="50" r="25" fill="#6b46c1"/>
			 <circle cx="50" cy="50" r="15" fill="#ffffff" opacity="0.6"/>
			 <circle cx="45" cy="45" r="5" fill="#ffffff"/>
		</svg>`,
	};
	constructor() {
		this.canvas = document.getElementById('gameCanvas');
		this.ctx = this.canvas.getContext('2d');
		this.isRunning = false;
		this.isPaused = false;
		this.score = 0;
		this.gameTime = 0;
		this.lastTime = 0;
		this.deltaTime = 0;
		this.initializeUI();
		this.initializeSystems();
		this.setupEventListeners();
		this.updateCanvasSize();
		this.loadAssets().then(() => {
			this.hideLoadingScreen();
			this.showStartMenu();
		});
		this.images = {};
		this.loadSVGImages();
		this.resizeObserver = new ResizeObserver(() => {
			this.updateCanvasSize();
		});
		this.resizeObserver.observe(document.getElementById('gameContainer'));
	}
	loadSVGImages() {
		Object.entries(Game.SVGAssets).forEach(([key, svg]) => {
			const blob = new Blob([svg], { type: 'image/svg+xml' });
			const url = URL.createObjectURL(blob);
			const img = new Image();
			img.src = url;
			this.images[key] = img;
		});
	}
	updateCanvasSize() {
		const gameContainer = document.getElementById('gameContainer');
		const ui = document.getElementById('ui');
		const availableHeight = gameContainer.clientHeight - ui.clientHeight;
		this.canvas.width = gameContainer.clientWidth;
		this.canvas.height = availableHeight;
		if (this.player) {
			this.player.x = Math.min(
				this.player.x,
				this.canvas.width - this.player.width / 2,
			);
			this.player.y = Math.min(
				this.player.y,
				this.canvas.height - this.player.height / 2,
			);
		}
		if (this.isRunning && !this.isPaused) {
			this.render();
		}
	}
	handleResize() {
		this.updateCanvasSize();
	}
	initializeUI() {
		this.startMenu = document.getElementById('startMenu');
		this.pauseMenu = document.getElementById('pauseMenu');
		this.gameOverMenu = document.getElementById('gameOverMenu');
		this.levelUpMenu = document.getElementById('levelUpMenu');
		this.loadingScreen = document.getElementById('loadingScreen');
		this.uiContainer = document.getElementById('ui');
		this.healthElement = document.getElementById('health');
		this.healthFill = document.getElementById('healthFill');
		this.xpElement = document.getElementById('xp');
		this.xpFill = document.getElementById('xpFill');
		this.levelElement = document.getElementById('level');
		this.scoreElement = document.getElementById('score');
		this.timeElement = document.getElementById('time');
	}
	initializeSystems() {
		this.player = {
			x: 0,
			y: 0,
			width: 40,
			height: 40,
			speed: 5,
			maxHealth: 100,
			health: 100,
			xp: 0,
			level: 1,
			xpToNextLevel: 100,
			direction: { x: 0, y: 0 },
			lastDash: 0,
			dashCooldown: 1000,
			isDashing: false,
			weapons: [],
			powerups: [],
			isInvulnerable: false,
			invulnerabilityTime: 500,
			lastHit: 0,
		};
		this.enemies = [];
		this.lastSpawn = 0;
		this.spawnInterval = 1000;
		this.enemyTypes = {
			basic: {
				speed: 2,
				health: 30,
				damage: 10,
				size: 30,
				color: '#e53e3e',
				xpValue: 10,
			},
			fast: {
				speed: 3.5,
				health: 20,
				damage: 5,
				size: 25,
				color: '#805ad5',
				xpValue: 15,
			},
			tank: {
				speed: 1,
				health: 100,
				damage: 20,
				size: 45,
				color: '#2b6cb0',
				xpValue: 25,
			},
		};
		this.projectiles = [];
		this.weapons = {
			basic: {
				damage: 20,
				speed: 8,
				size: 5,
				color: '#ffffff',
				fireRate: 500,
				lastFired: 0,
				range: 500,
			},
		};
		this.particles = [];
		this.powerups = [];
		this.lastPowerupSpawn = 0;
		this.powerupSpawnInterval = 10000;
	}
	setupEventListeners() {
		window.addEventListener('keydown', (e) => this.handleKeyDown(e));
		window.addEventListener('keyup', (e) => this.handleKeyUp(e));
		window.addEventListener('resize', () => this.handleResize());
		document
			.getElementById('startButton')
			.addEventListener('click', () => this.startGame());
		document
			.getElementById('resumeButton')
			.addEventListener('click', () => this.resumeGame());
		document
			.getElementById('restartButton')
			.addEventListener('click', () => this.restartGame());
		document
			.getElementById('quitButton')
			.addEventListener('click', () => this.quitToMenu());
	}
	async loadAssets() {
		const promises = [];
		await Promise.all(promises);
	}
	handleKeyDown(e) {
		if (!this.isRunning || this.isPaused) return;
		switch (e.key.toLowerCase()) {
			case 'w':
			case 'arrowup':
				this.player.direction.y = -1;
				break;
			case 's':
			case 'arrowdown':
				this.player.direction.y = 1;
				break;
			case 'a':
			case 'arrowleft':
				this.player.direction.x = -1;
				break;
			case 'd':
			case 'arrowright':
				this.player.direction.x = 1;
				break;
			case ' ':
				this.handleDash();
				break;
			case 'escape':
				this.togglePause();
				break;
		}
	}
	handleKeyUp(e) {
		if (!this.isRunning) return;
		switch (e.key.toLowerCase()) {
			case 'w':
			case 'arrowup':
				if (this.player.direction.y < 0) this.player.direction.y = 0;
				break;
			case 's':
			case 'arrowdown':
				if (this.player.direction.y > 0) this.player.direction.y = 0;
				break;
			case 'a':
			case 'arrowleft':
				if (this.player.direction.x < 0) this.player.direction.x = 0;
				break;
			case 'd':
			case 'arrowright':
				if (this.player.direction.x > 0) this.player.direction.x = 0;
				break;
		}
	}
	showStartMenu() {
		this.startMenu.classList.remove('hidden');
		this.uiContainer.style.display = 'none';
	}
	hideLoadingScreen() {
		this.loadingScreen.classList.add('hidden');
	}
	togglePause() {
		this.isPaused = !this.isPaused;
		if (this.isPaused) {
			this.pauseMenu.classList.remove('hidden');
		} else {
			this.pauseMenu.classList.add('hidden');
		}
	}
	startGame() {
		this.isRunning = true;
		this.resetGameState();
		this.player.x = this.canvas.width / 2;
		this.player.y = this.canvas.height / 2;
		this.startMenu.classList.add('hidden');
		this.uiContainer.style.display = 'block';
		this.lastTime = performance.now();
		requestAnimationFrame((timestamp) => this.gameLoop(timestamp));
	}
	resetGameState() {
		this.player.x = this.canvas.width / 2;
		this.player.y = this.canvas.height / 2;
		this.player.health = this.player.maxHealth;
		this.player.xp = 0;
		this.player.level = 1;
		this.player.direction = { x: 0, y: 0 };
		this.score = 0;
		this.gameTime = 0;
		this.enemies = [];
		this.projectiles = [];
		this.particles = [];
		this.powerups = [];
		this.updateUI();
	}
	gameLoop(timestamp) {
		if (!this.isRunning) return;
		this.deltaTime = timestamp - this.lastTime;
		this.lastTime = timestamp;
		if (!this.isPaused) {
			this.update();
			this.render();
		}
		requestAnimationFrame((timestamp) => this.gameLoop(timestamp));
	}
	update() {
		this.gameTime += this.deltaTime;
		this.updatePlayer();
		this.updateEnemies();
		this.updateProjectiles();
		this.updateParticles();
		this.checkCollisions();
		this.spawnEnemies();
		this.updateUI();
	}
	updatePlayer() {
		if (this.player.isDashing) {
			const dashSpeed = this.player.speed * 3;
			this.player.x += this.player.direction.x * dashSpeed;
			this.player.y += this.player.direction.y * dashSpeed;
			if (performance.now() - this.player.lastDash > 200) {
				this.player.isDashing = false;
			}
		} else {
			this.player.x += this.player.direction.x * this.player.speed;
			this.player.y += this.player.direction.y * this.player.speed;
		}
		this.player.x = Math.max(
			this.player.width / 2,
			Math.min(this.canvas.width - this.player.width / 2, this.player.x),
		);
		this.player.y = Math.max(
			this.player.height / 2,
			Math.min(this.canvas.height - this.player.height / 2, this.player.y),
		);
		this.updateWeapons();
	}
	updateWeapons() {
		const now = performance.now();
		const weapon = this.weapons.basic;
		if (now - weapon.lastFired >= weapon.fireRate) {
			this.fireProjectile();
			weapon.lastFired = now;
		}
	}
	fireProjectile() {
		let nearestEnemy = null;
		let minDist = Infinity;
		for (const enemy of this.enemies) {
			const dist = this.getDistance(this.player, enemy);
			if (dist < minDist) {
				minDist = dist;
				nearestEnemy = enemy;
			}
		}
		if (nearestEnemy) {
			const angle = Math.atan2(
				nearestEnemy.y - this.player.y,
				nearestEnemy.x - this.player.x,
			);
			const projectile = {
				x: this.player.x,
				y: this.player.y,
				velocity: {
					x: Math.cos(angle) * this.weapons.basic.speed,
					y: Math.sin(angle) * this.weapons.basic.speed,
				},
				damage: this.weapons.basic.damage,
				size: this.weapons.basic.size,
				color: this.weapons.basic.color,
				distanceTraveled: 0,
			};
			this.projectiles.push(projectile);
			this.createParticles(this.player.x, this.player.y, 3, '#ffffff', 0.5);
		}
	}
	updateEnemies() {
		for (let i = this.enemies.length - 1; i >= 0; i--) {
			const enemy = this.enemies[i];
			const angle = Math.atan2(
				this.player.y - enemy.y,
				this.player.x - enemy.x,
			);
			enemy.x += Math.cos(angle) * enemy.speed;
			enemy.y += Math.sin(angle) * enemy.speed;
			if (enemy.health <= 0) {
				this.handleEnemyDeath(enemy);
				this.enemies.splice(i, 1);
			}
		}
	}
	handleEnemyDeath(enemy) {
		this.score += enemy.xpValue;
		this.addXP(enemy.xpValue);
		this.createParticles(enemy.x, enemy.y, 8, enemy.color, 1);
		if (Math.random() < 0.1) {
			this.spawnPowerup(enemy.x, enemy.y);
		}
	}
	updateProjectiles() {
		for (let i = this.projectiles.length - 1; i >= 0; i--) {
			const projectile = this.projectiles[i];
			projectile.x += projectile.velocity.x;
			projectile.y += projectile.velocity.y;
			projectile.distanceTraveled += Math.sqrt(
				projectile.velocity.x ** 2 + projectile.velocity.y ** 2,
			);
			if (projectile.distanceTraveled > this.weapons.basic.range) {
				this.projectiles.splice(i, 1);
				continue;
			}
			if (
				projectile.x < 0 ||
				projectile.x > this.canvas.width ||
				projectile.y < 0 ||
				projectile.y > this.canvas.height
			) {
				this.projectiles.splice(i, 1);
			}
		}
	}
	updateParticles() {
		for (let i = this.particles.length - 1; i >= 0; i--) {
			const particle = this.particles[i];
			particle.x += particle.velocity.x;
			particle.y += particle.velocity.y;
			particle.life -= this.deltaTime;
			particle.size *= 0.95;
			if (particle.life <= 0 || particle.size < 0.5) {
				this.particles.splice(i, 1);
			}
		}
	}
	createParticles(x, y, count, color, scale = 1) {
		for (let i = 0; i < count; i++) {
			const angle = Math.random() * Math.PI * 2;
			const speed = Math.random() * 2 + 1;
			const size = (Math.random() * 3 + 2) * scale;
			this.particles.push({
				x,
				y,
				velocity: {
					x: Math.cos(angle) * speed,
					y: Math.sin(angle) * speed,
				},
				size,
				color,
				life: 500,
			});
		}
	}
	spawnEnemies() {
		const now = performance.now();
		if (now - this.lastSpawn > this.spawnInterval) {
			const spawnCount = Math.floor(this.gameTime / 30000) + 1;
			for (let i = 0; i < spawnCount; i++) {
				this.spawnEnemy();
			}
			this.lastSpawn = now;
			this.spawnInterval = Math.max(500, 1000 - this.gameTime / 60000);
		}
	}
	spawnEnemy() {
		let enemyType = this.enemyTypes.basic;
		if (this.gameTime > 60000) {
			enemyType =
				Math.random() < 0.3 ? this.enemyTypes.fast : this.enemyTypes.basic;
		}
		if (this.gameTime > 120000) {
			enemyType =
				Math.random() < 0.5
					? Math.random() < 0.6
						? this.enemyTypes.fast
						: this.enemyTypes.tank
					: this.enemyTypes.basic;
		}
		let x, y;
		const padding = 50;
		const side = Math.floor(Math.random() * 4);
		switch (side) {
			case 0:
				x = Math.random() * this.canvas.width;
				y = -padding;
				break;
			case 1:
				x = this.canvas.width + padding;
				y = Math.random() * this.canvas.height;
				break;
			case 2:
				x = Math.random() * this.canvas.width;
				y = this.canvas.height + padding;
				break;
			case 3:
				x = -padding;
				y = Math.random() * this.canvas.height;
				break;
		}
		this.enemies.push({
			...enemyType,
			x,
			y,
		});
	}
	checkCollisions() {
		if (!this.player.isInvulnerable) {
			for (const enemy of this.enemies) {
				if (
					this.checkCircleCollision(
						this.player.x,
						this.player.y,
						this.player.width / 2,
						enemy.x,
						enemy.y,
						enemy.size / 2,
					)
				) {
					this.damagePlayer(enemy.damage);
					break;
				}
			}
		}
		for (let i = this.projectiles.length - 1; i >= 0; i--) {
			const projectile = this.projectiles[i];
			for (let j = this.enemies.length - 1; j >= 0; j--) {
				const enemy = this.enemies[j];
				if (
					this.checkCircleCollision(
						projectile.x,
						projectile.y,
						projectile.size,
						enemy.x,
						enemy.y,
						enemy.size / 2,
					)
				) {
					enemy.health -= projectile.damage;
					this.createParticles(
						projectile.x,
						projectile.y,
						3,
						enemy.color,
						0.5,
					);
					this.projectiles.splice(i, 1);
					break;
				}
			}
		}
		for (let i = this.powerups.length - 1; i >= 0; i--) {
			const powerup = this.powerups[i];
			if (
				this.checkCircleCollision(
					this.player.x,
					this.player.y,
					this.player.width / 2,
					powerup.x,
					powerup.y,
					powerup.size / 2,
				)
			) {
				this.collectPowerup(powerup);
				this.powerups.splice(i, 1);
			}
		}
	}
	damagePlayer(damage) {
		this.player.health -= damage;
		this.player.isInvulnerable = true;
		this.player.lastHit = performance.now();
		this.createParticles(this.player.x, this.player.y, 8, '#ff0000', 1);
		this.updateHealthBar();
		if (this.player.health <= 0) {
			this.gameOver();
		}
		setTimeout(() => {
			this.player.isInvulnerable = false;
		}, this.player.invulnerabilityTime);
	}
	spawnPowerup(x, y) {
		const types = ['health', 'damage', 'speed', 'firerate'];
		const type = types[Math.floor(Math.random() * types.length)];
		this.powerups.push({
			x,
			y,
			type,
			size: 20,
			color: this.getPowerupColor(type),
		});
	}
	getPowerupColor(type) {
		const colors = {
			health: '#48bb78',
			damage: '#e53e3e',
			speed: '#4299e1',
			firerate: '#805ad5',
		};
		return colors[type] || '#ffffff';
	}
	collectPowerup(powerup) {
		switch (powerup.type) {
			case 'health':
				this.player.health = Math.min(
					this.player.maxHealth,
					this.player.health + 20,
				);
				break;
			case 'damage':
				this.weapons.basic.damage *= 1.2;
				break;
			case 'speed':
				this.player.speed *= 1.1;
				break;
			case 'firerate':
				this.weapons.basic.fireRate *= 0.9;
				break;
		}
		this.createParticles(powerup.x, powerup.y, 6, powerup.color, 1);
		this.updateUI();
	}
	addXP(amount) {
		this.player.xp += amount;
		while (this.player.xp >= this.player.xpToNextLevel) {
			this.levelUp();
		}
		this.updateXPBar();
	}
	levelUp() {
		this.player.xp -= this.player.xpToNextLevel;
		this.player.level++;
		this.player.xpToNextLevel = Math.floor(this.player.xpToNextLevel * 1.2);
		this.isPaused = true;
		this.showLevelUpMenu();
	}
	showLevelUpMenu() {
		const upgrades = this.generateUpgrades();
		const upgradeContainer = document.getElementById('upgradeOptions');
		upgradeContainer.innerHTML = '';
		upgrades.forEach((upgrade) => {
			const button = document.createElement('button');
			button.className = 'menu-button';
			button.innerHTML = `
           <h3>${upgrade.name}</h3>
           <p>${upgrade.description}</p>
       `;
			button.onclick = () => this.applyUpgrade(upgrade);
			upgradeContainer.appendChild(button);
		});
		this.levelUpMenu.classList.remove('hidden');
	}
	generateUpgrades() {
		const possibleUpgrades = [
			{
				name: 'Health Boost',
				description: 'Increase max health by 20',
				apply: () => {
					this.player.maxHealth += 20;
					this.player.health += 20;
				},
			},
			{
				name: 'Damage Up',
				description: 'Increase weapon damage by 25%',
				apply: () => {
					this.weapons.basic.damage *= 1.25;
				},
			},
			{
				name: 'Speed Boost',
				description: 'Increase movement speed by 15%',
				apply: () => {
					this.player.speed *= 1.15;
				},
			},
			{
				name: 'Rapid Fire',
				description: 'Decrease weapon cooldown by 20%',
				apply: () => {
					this.weapons.basic.fireRate *= 0.8;
				},
			},
		];
		return this.shuffleArray(possibleUpgrades).slice(0, 3);
	}
	applyUpgrade(upgrade) {
		upgrade.apply();
		this.levelUpMenu.classList.add('hidden');
		this.isPaused = false;
		this.updateUI();
	}
	render() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.drawGrid();
		this.powerups.forEach((powerup) => {
			const size = powerup.size * 2;
			this.ctx.drawImage(
				this.images[`${powerup.type}Powerup`],
				powerup.x - size / 2,
				powerup.y - size / 2,
				size,
				size,
			);
		});
		this.projectiles.forEach((projectile) => {
			const size = projectile.size * 2;
			this.ctx.drawImage(
				this.images.projectile,
				projectile.x - size / 2,
				projectile.y - size / 2,
				size,
				size,
			);
		});
		this.enemies.forEach((enemy) => {
			const size = enemy.size * 2;
			let enemyType;
			if (enemy.speed === this.enemyTypes.fast.speed) {
				enemyType = 'fastEnemy';
			} else if (enemy.health === this.enemyTypes.tank.health) {
				enemyType = 'tankEnemy';
			} else {
				enemyType = 'basicEnemy';
			}
			this.ctx.drawImage(
				this.images[enemyType],
				enemy.x - size / 2,
				enemy.y - size / 2,
				size,
				size,
			);
		});
		this.drawPlayer();
		this.particles.forEach((particle) => {
			this.ctx.beginPath();
			this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
			this.ctx.fillStyle = particle.color;
			this.ctx.globalAlpha = particle.life / 500;
			this.ctx.fill();
			this.ctx.globalAlpha = 1;
		});
	}
	drawGrid() {
		this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
		this.ctx.lineWidth = 1;
		const gridSize = 50;
		const offsetX = this.player.x % gridSize;
		const offsetY = this.player.y % gridSize;
		for (let x = -offsetX; x < this.canvas.width; x += gridSize) {
			this.ctx.beginPath();
			this.ctx.moveTo(x, 0);
			this.ctx.lineTo(x, this.canvas.height);
			this.ctx.stroke();
		}
		for (let y = -offsetY; y < this.canvas.height; y += gridSize) {
			this.ctx.beginPath();
			this.ctx.moveTo(0, y);
			this.ctx.lineTo(this.canvas.width, y);
			this.ctx.stroke();
		}
	}
	drawPlayer() {
		this.ctx.save();
		const gradient = this.ctx.createRadialGradient(
			this.player.x,
			this.player.y,
			0,
			this.player.x,
			this.player.y,
			this.player.width,
		);
		gradient.addColorStop(0, 'rgba(107, 70, 193, 0.3)');
		gradient.addColorStop(1, 'rgba(107, 70, 193, 0)');
		this.ctx.beginPath();
		this.ctx.arc(
			this.player.x,
			this.player.y,
			this.player.width,
			0,
			Math.PI * 2,
		);
		this.ctx.fillStyle = gradient;
		this.ctx.fill();
		const size = this.player.width * 2;
		this.ctx.drawImage(
			this.images.player,
			this.player.x - size / 2,
			this.player.y - size / 2,
			size,
			size,
		);
		if (this.player.isDashing) {
			this.ctx.globalAlpha = 0.5;
			this.ctx.drawImage(
				this.images.player,
				this.player.x - size / 2 - this.player.direction.x * 20,
				this.player.y - size / 2 - this.player.direction.y * 20,
				size,
				size,
			);
			this.ctx.globalAlpha = 1;
		}
		this.ctx.restore();
	}
	updateUI() {
		this.updateHealthBar();
		this.updateXPBar();
		this.levelElement.textContent = this.player.level;
		this.scoreElement.textContent = this.formatNumber(this.score);
		this.timeElement.textContent = this.formatTime(this.gameTime);
	}
	updateHealthBar() {
		const healthPercent = (this.player.health / this.player.maxHealth) * 100;
		this.healthElement.textContent = Math.ceil(this.player.health);
		this.healthFill.style.width = `${healthPercent}%`;
		if (healthPercent < 20) {
			this.healthFill.style.background =
				'linear-gradient(90deg, #e53e3e, #fc8181)';
		} else if (healthPercent < 50) {
			this.healthFill.style.background =
				'linear-gradient(90deg, #ecc94b, #f6e05e)';
		} else {
			this.healthFill.style.background =
				'linear-gradient(90deg, #48bb78, #68d391)';
		}
	}
	updateXPBar() {
		const xpPercent = (this.player.xp / this.player.xpToNextLevel) * 100;
		this.xpElement.textContent = `${this.player.xp}/${this.player.xpToNextLevel}`;
		this.xpFill.style.width = `${xpPercent}%`;
	}
	gameOver() {
		this.isRunning = false;
		document.getElementById('finalTime').textContent = this.formatTime(
			this.gameTime,
		);
		document.getElementById('finalScore').textContent = this.formatNumber(
			this.score,
		);
		document.getElementById('finalLevel').textContent = this.player.level;
		document.getElementById('enemiesDefeated').textContent =
			this.formatNumber(this.score / 10);
		this.gameOverMenu.classList.remove('hidden');
	}
	checkCircleCollision(x1, y1, r1, x2, y2, r2) {
		const dx = x2 - x1;
		const dy = y2 - y1;
		const distance = Math.sqrt(dx * dx + dy * dy);
		return distance < r1 + r2;
	}
	getDistance(obj1, obj2) {
		const dx = obj2.x - obj1.x;
		const dy = obj2.y - obj1.y;
		return Math.sqrt(dx * dx + dy * dy);
	}
	formatTime(ms) {
		const seconds = Math.floor(ms / 1000);
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
	}
	formatNumber(num) {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}
	shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}
	handleDash() {
		const now = performance.now();
		if (
			!this.player.isDashing &&
			now - this.player.lastDash >= this.player.dashCooldown
		) {
			if (this.player.direction.x !== 0 || this.player.direction.y !== 0) {
				this.player.isDashing = true;
				this.player.lastDash = now;
				this.createParticles(
					this.player.x,
					this.player.y,
					10,
					'#6b46c1',
					1.5,
				);
			}
		}
	}
}
window.addEventListener('load', () => {
	const game = new Game();
	let resizeTimeout;
	window.addEventListener('resize', () => {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(() => {
			game.handleResize();
		}, 250);
	});
	document.addEventListener('contextmenu', (e) => e.preventDefault());
});
