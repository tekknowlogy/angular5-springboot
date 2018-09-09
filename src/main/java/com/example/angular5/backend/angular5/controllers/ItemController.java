package com.example.angular5.backend.angular5.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.angular5.backend.angular5.beans.Item;
import com.example.angular5.backend.angular5.services.ItemService;

@RestController
public class ItemController {
	
	@Autowired
	private ItemService itemService;
	
	@PostMapping("/item/save")
	public void saveItem(@RequestBody Item item) {
		itemService.saveItem(item);
	}
	
	@GetMapping("/item/list")
	public List<Item> getItems() {
		return itemService.getItems();
	}

}
