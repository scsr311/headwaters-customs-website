CREATE TABLE `dream_builds` (
	`id` int AUTO_INCREMENT NOT NULL,
	`sessionId` varchar(255) NOT NULL,
	`ipAddress` varchar(45),
	`userEmail` varchar(320),
	`prompt` text NOT NULL,
	`generatedImages` text NOT NULL,
	`renderCount` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `dream_builds_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`description` text NOT NULL,
	`vehicleYear` int,
	`vehicleMake` varchar(100),
	`vehicleModel` varchar(100),
	`modifications` text NOT NULL,
	`coverImage` varchar(500) NOT NULL,
	`galleryImages` text NOT NULL,
	`featured` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `projects_id` PRIMARY KEY(`id`),
	CONSTRAINT `projects_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `quote_requests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`customerName` varchar(255) NOT NULL,
	`customerEmail` varchar(320) NOT NULL,
	`customerPhone` varchar(50),
	`vehiclePhotos` text NOT NULL,
	`selectedModifications` text NOT NULL,
	`aiSummary` text,
	`status` enum('pending','reviewed','quoted','declined') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `quote_requests_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `rate_limits` (
	`id` int AUTO_INCREMENT NOT NULL,
	`identifier` varchar(255) NOT NULL,
	`feature` varchar(50) NOT NULL,
	`requestCount` int NOT NULL DEFAULT 0,
	`lastRequest` timestamp NOT NULL DEFAULT (now()),
	`resetAt` timestamp NOT NULL,
	CONSTRAINT `rate_limits_id` PRIMARY KEY(`id`),
	CONSTRAINT `rate_limits_identifier_unique` UNIQUE(`identifier`)
);
