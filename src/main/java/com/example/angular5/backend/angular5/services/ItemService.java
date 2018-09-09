package com.example.angular5.backend.angular5.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.angular5.backend.angular5.beans.Item;

import lombok.extern.java.Log;

@Service
@Log
public class ItemService {
	
	static List<Item> items = new ArrayList<Item>();
	
	public void saveItem(Item item) {
		log.info("item name " + item.getName());
		item.setId(items.size()+1);
		items.add(item);
	}
	
	public List<Item> getItems() {
		return items;
	}

}
