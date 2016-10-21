var CONFIG = {
	REALMNAME: document.location.href.split("/")[2],
	MASS: {
		EDITOR: {
			CHOICE: "选择",
			TEXT: "文字",
			IMAGES: "图片",
			VOICE: "语音",
			VIDEO: "视频",
			NEWS: "图文消息"
		},
		EDITOR_URL: {
			CHOICE: "http://" + document.location.href.split("/")[2] + "/wechat/material/editor?",
      CHOICE_INFO:"http://" + document.location.href.split("/")[2] + "/wechat/material/editorInfo?",
			UPLOAD_URL: "data/data2.json"
		}
	},
	MENU: {},
	MEDIA: {
		IMAGES: {
			EDITOR: "编辑",
			MOBILE_PACKET: "移动分组",
			IMAGES_DELETE: "删除"
		},
		MEDIA_URL: {}
	}
};
(function(r, e) {
	"use strict";
	var t = r.eub || (r.eub = {}),
		n;
	n = t.register = function(e) {
		var e = e.split("."),
			t = e.length,
			n = r;
		for (var i = 0; i < t; i++) {
			n = n[e[i]] = n[e[i]] || {}
		}
		return n
	};
	r.eb = t
})(window);
(function(o, i) {
	var s = i.register("eub.popup");
	s.popuEditorHtml = function(i, s, a) {
		var n = o('<div class="dialog_wrp"></div>');
		n.html('<div class="bodyblock"></div>' + '<div class="dialog">' + '<div class="dialog_hd">' + "<h3>" + (i.name ? i.name : "文本域") + "</h3>" + '<a href="javascript:;" class="icon16_opr closed pop_closed">' + (i.close ? i.close : "关闭") + "</a>" + "</div>" + '<div class="dialog_bd">' + (i.appengHtml ? i.appengHtml : "内容错误") + "</div>" + '<div class="dialog_ft">' + '<span class="btn green disabled">' + '<button type="button" class="js_btn" data-index="0">确定</button>' + "</span>" + '<span class="btn red btn_default">' + '<button type="button" class="js_btn " data-index="1">取消</button>' + "</span>" + "</div>" + "</div>");
/*		n.html('<div class="bodyblock"></div>' + '<div class="dialog">' + '<div class="dialog_hd">' + "<h3>" + (i.name ? i.name : "文本域") + "</h3>" + '<a href="javascript:;" class="icon16_opr closed pop_closed">' + (i.close ? i.close : "关闭") + "</a>" + "</div>" + '<div class="dialog_bd">' + (i.appengHtml ? i.appengHtml : "内容错误") + "</div>" + '<div class="dialog_ft">' + '<button type="button" class="btn btn-primary save" data-index="0">确定</button>'+'<button type="button" class="btn btn-default" data-index="1">取消</button>'+ "</div>" + "</div>");
*/
		var t = n.find(".dialog"),
			d = n.find(".disabled"),
			e = n.find(".pop_closed"),
			p = n.find(".dialog_ft .red");
		n.addClass(i.dialogClass);
		n.css({
			width: "840px",
			"z-index": 9999
		});
		t.css({
			marginTop: "-291px",
			marginLeft: "-50%",
			width: "100%",
			position: "relative",
			"z-index": "2333"
		});
		o("body").append(n);
		e.on("click", function() {
			if (o.isFunction(s)) {
				s()
			}
			n.remove()
		});
		p.on("click", function() {
			n.remove()
		});
		d.on("click", function() {
			if (o.isFunction(a)) {
				a()
			}
		})
	};
	s.popuMediaHtml = function(i, s, a, n) {
		o(".pos_center").remove();
		var t = o('<div class="popover pos_center"></div>');
		t.html('<div class="popover_inner">' + '<div class="popover_content jsPopOverContent">' + s + "</div>" + '<div class="popover_bar">' + '<a href="javascript:;" class="btn btn_primary jsPopoverBt">确定</a>' + "&nbsp;" + '<a href="javascript:;" class="btn btn_default jsPopoverBt">取消</a>' + "</div>" + "</div>" + '<i class="popover_arrow popover_arrow_out"></i>' + '<i class="popover_arrow popover_arrow_in"></i>');
		i.popover.top ? t.css(i.popover) : false;
		i.domClass ? t.addClass(i.domClass) : false;
		o("body").append(t);
		var d = t.find(".btn_primary"),
			e = t.find(".btn_default");
		d.on("click", function() {
			if (o.isFunction(a)) {
				a()
			}
		});
		e.on("click", function() {
			if (o.isFunction(n)) {
				n()
			}
			t.remove()
		})
	};
	s.popuCutstomHtml = function() {}
})(jQuery, eub);
(function(e, t) {
	var i = t.register("eub.tools");
	i.isCAjax = true;
	i.ajax = function(t, a, n, s) {
		if (i.isCAjax == false) {
			return
		}
		var r = new Date;
		r = r.getTime();
		e.ajax({
			type: t ? t : "get",
			data: n,
			dataType: "json",
			url: a,
			success: function(e) {
				if (e.state == 1) {
					if (s) {
						return s(e)
					}
				} else {
					alert(e.msg)
				}
				i.isCAjax = true
			},
			error: function() {
				i.isCAjax = true
			}
		})
	};
	i.popup = function(t, i, a, n) {
		e(t).on("click", function() {
			var t = e(this).attr(a);
			if (e.isFunction(n)) {
				n()
			}
			i ? e(t).show() : e(t).hide()
		})
	};
	i.queryUrl = function(e, t) {
		t = t ? t.indexOf("?") > -1 ? t.substr(t.indexOf("?") + 1) : t : location.search.substr(1);
		var i;
		if (e) {
			i = t.match(new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"));
			i = i === null ? "" : decodeURIComponent(i[2])
		} else {
			i = {};
			if (t) {
				var a = t.split("&"),
					n, s = 0,
					r = a.length;
				for (s = 0; s < r; s++) {
					n = a[s].split("=");
					i[n[0]] = n[1] === undefined ? "" : decodeURIComponent(n[1])
				}
			}
		}
		return i
	};
	i.checkBrowser = function() {
		var e = navigator.userAgent.toLowerCase();
		var t = "";
		if (/msie/i.test(e) && !/opera/.test(e)) {
			t = "IE: " + e.match(/msie ([\d.]+)/)[1]
		} else if (/firefox/i.test(e)) {
			t = "Firefox: " + e.match(/firefox\/([\d.]+)/)[1]
		} else if (/chrome/i.test(e) && /webkit/i.test(e) && /mozilla/i.test(e)) {
			t = "Chrome: " + e.match(/chrome\/([\d.]+)/)[1]
		} else if (/opera/i.test(e)) {
			t = "Opera: " + e.match(/opera.([\d.]+)/)[1]
		} else if (/webkit/i.test(e) && !(/chrome/i.test(e) && /webkit/i.test(e) && /mozilla/i.test(e))) {
			t = "Safari: "
		} else {
			t = "unKnow,未知浏览器 "
		}
		return t
	};
	i.corresponding = function(t) {
		e(t).each(function() {
			e("." + e(this).attr("id")).addClass("selected")
		})
	};
	i.correspondings = function(t) {
		e(t).addClass("selected")
	};
	i.ajaxPaging = function(a) {
		e(".dialog_ft_desc .js_selected").html("0");
		e(".dialog .btn.green").addClass("disabled").removeClass("btn_primary");
		var n = a.num > 0 ? parseInt(a.slefNum.html()) + a.num <= parseInt(a.lastNum.html()) : parseInt(a.slefNum.html()) + a.num > 0,
			s = null;
		if (n) {
			var r = parseInt(a.slefNum.html()) * 1 + a.num * 1;
			var o = "";
			if (e("#msgSearchInput").val() != "") {
				o = "filter=" + e("#msgSearchInput").val()
			}
			t.tools.ajax("get", a.url + r + o, {}, function(n) {
				i.isPaging = true;
				a.slefNum.html(parseInt(a.slefNum.html()) + a.num);
				e("." + a.appendDom).html(n.msg);
				i.corresponding(".media_news .tuzh");
				if (t.editor && t.editor.jqdomid && t.editor.jqdomid != "") {
					i.correspondings('[data-id="' + t.editor.jqdomid + '"]');
					e(".dialog_ft_desc .js_selected").html(1)
				} else if (t.tools && t.tools.jqdomid && t.tools.jqdomid != "") {
					i.correspondings('[data-id="' + t.tools.jqdomid + '"]');
					e(".dialog_ft_desc .js_selected").html(1)
				} else {
					e(".dialog_ft_desc .js_selected").html(0)
				}
			})
		}
	};
	i.isPaging = true;
	i.clickPaging = function(a, n, s) {
		e(".page_nav_area").on("click", ".page_prev", function() {
			var r = e(this),
				o = r.parent().find(".page_num label").eq(0),
				d = r.parent().find(".page_num label").eq(1),
				l = null;
			if (i.isPaging) {
				i.isPaging = false;
				l = {
					appendDom: a,
					slefDom: r,
					slefNum: o,
					lastNum: d,
					num: -1,
					dataTooltip: n,
					url: s
				};
				t.tools.ajaxPaging(l);
				e(".page_nav_area .page_next").show();
				e(".page_nav_area .page_last").hide();
				if (o.html() == 2) {
					r.hide()
				}
				e(".goto_area input").val("")
			}
		});
		e(".page_nav_area").on("click", ".page_next", function() {
			var r = e(this),
				o = r.parent().find(".page_num label").eq(0),
				d = r.parent().find(".page_num label").eq(1),
				l = null;
			if (i.isPaging) {
				i.isPaging = false;
				l = {
					appendDom: a,
					slefDom: r,
					slefNum: o,
					lastNum: d,
					num: 1,
					dataTooltip: n,
					url: s
				};
				t.tools.ajaxPaging(l);
				e(".page_nav_area .page_prev").show();
				if (o.html() == d.html() - 1) {
					r.hide();
					e(".page_nav_area .page_last").show()
				}
				e(".goto_area input").val("")
			}
		});
		e(".page_go").on("click", function() {
			var n = e(this).parent().find("input").val(),
				r = e(".page_num label").eq(0),
				o = e(".page_num label").eq(1);
			if (parseInt(n) <= o.html() && parseInt(n) > 0) {
				t.tools.ajax("get", s + parseInt(n), {}, function(s) {
					r.html(parseInt(n));
					e("." + a).html(s.msg);
					if (t.editor && t.editor.jqdomid && t.editor.jqdomid != "") {
						i.correspondings('[data-id="' + t.editor.jqdomid + '"]');
						e(".dialog_ft_desc .js_selected").html(1)
					} else if (t.tools && t.tools.jqdomid && t.tools.jqdomid != "") {
						i.correspondings('[data-id="' + t.tools.jqdomid + '"]');
						e(".dialog_ft_desc .js_selected").html(1)
					} else {
						e(".dialog_ft_desc .js_selected").html(0)
					}
					console.log(o.html() == o.html() - 1);
					if (r.html() > 1) {
						e(".page_nav_area .page_prev").show()
					} else {
						e(".page_nav_area .page_prev").hide()
					}
					if (o.html() == n) {
						e(".page_nav_area .page_next").hide();
						e(".page_nav_area .page_last").show()
					} else {
						e(".page_nav_area .page_next").show()
					}
				})
			}
		})
	};
	i.audioPlay = function(i, a) {
		e(i).on("click", a, function() {
			var i = parseInt(e(this).find(".desc").html()) ? parseInt(e(this).find(".desc").html()) * 1e3 : 1e5,
				a = e(this).find("audio")[0],
				n = null;
			e(".js_media_list audio").each(function() {
				this.pause()
			});
			if (e(this).parent().hasClass("wxAudioPlaying")) {
				t.tools.jqdomid = "";
				e(this).parent().removeClass("wxAudioPlaying");
				a.pause()
			} else {
				e(".wxAudioPlaying").removeClass("wxAudioPlaying");
				e(this).parent().removeClass("wxAudioPlaying");
				e(this).parent().addClass("wxAudioPlaying");
				a.play();
				t.tools.jqdomid = e(this).attr("data-id");
				n = setTimeout(function() {
					e(this).parent().removeClass("wxAudioPlaying")
				}, i)
			}
		})
	};
	i.videoPlay = function() {
		e(".js_videoArea").on("click", ".video_shot", function() {
			e(".video_player video").attr("src", e(".video_player video").attr("data-src"));
			e(this).hide();
			e(this).parents(".js_videoArea").find(".video_player").show()
		})
	};
	i.tab = function(i, a) {
		e(i).on("click", a, function() {
			var n = e(this).find(".img_item_bd");
			t.tools.jqdom = e(this);
			if (e(this).hasClass("selected")) {
				e(this).removeClass("selected");
				e(".dialog_ft_desc .js_selected").html("0");
				t.tools.jqdomid = "";
				e(".dialog .btn.green").addClass("disabled").removeClass("btn_primary")
			} else {
				t.tools.jqdomid = e(this).attr("data-id");
				e(".dialog_ft_desc .js_selected").html("1");
				e(".dialog .btn.green").removeClass("disabled").addClass("btn_primary");
				e(i + " " + a).removeClass("selected");
				e(this).addClass("selected")
			}
			return false
		});
		return this
	};
	i.insertHtml = function(t, a) {
		var n = null;
		e(t).find(".js_aLink").on("click", function() {
			e(t).find(".editInsert").fadeIn(300)
		});
		e(t).find(".editInsertBtns").on("click", function() {
			e(t).find(".editInserUrl").val("");
			e(t).find(".editInserName").val("");
			e(t).find(".editInsert").fadeOut(300);
			n = null
		});
		e(t).find(".js_editorArea").on("click", "a", function() {
			var i = e(this).attr("href"),
				a = e(this).html();
			n = e(this);
			if (i && a) {
				e(t).find(".editInserUrl").val(i);
				e(t).find(".editInserName").val(a);
				e(t).find(".editInsert").fadeIn(300)
			}
			return false
		});
		e(t).find(".editInsertBtn").on("click", function() {
			if (n) {
				n.attr("href", e(t).find(".editInserUrl").val());
				n.html(e(t).find(".editInserName").val());
				e(t).find(".editInsert").fadeOut(300);
				e(t).find(".editInserUrl").val("");
				e(t).find(".editInserName").val("");
				n = null
			} else if (e(t).find(".editInserUrl").val() != "") {
				var s = "<a href='" + e(t).find(".editInserUrl").val() + "' contenteditable='false'>" + e(t).find(".editInserName").val() + "</a>";
				var r = e(t).find(".edit_area")[0];
				if (!r) return;
				r.focus();
				var o = window.getSelection ? window.getSelection() : document.selection;
				var d = i.checkBrowser().split(":");
				var l = i.checkBrowser().split(":")[0];
				var f = Number(i.checkBrowser().split(":")[1]);
				if (l == "IE" && f < 9) {
					i.range.pasteHTML(s)
				} else {
					var c = e(s)[0];
					if (i.range.insertNode) {
						i.range.insertNode(c)
					} else {
						e(t).find(".js_editorArea").append(e(s))
					}
					e(t).find(".editInserUrl").val("");
					e(t).find(".editInserName").val("")
				}
				e(t).find("[name=" + a + "]").val(e(t).find(".edit_area").html());
				e(t).find(".editInsert").fadeOut(300)
			}
		})
	};
	i.range = {};
	i.textEditor = function(t, a) {
		i.insertHtml(t, a);
		window.browser = {};
		if (navigator.userAgent.indexOf("MSIE") > 0) {
			browser.name = "MSIE";
			browser.ie = true
		} else if (navigator.userAgent.indexOf("Firefox") > 0) {
			browser.name = "Firefox";
			browser.firefox = true
		} else if (navigator.userAgent.indexOf("Chrome") > 0) {
			browser.name = "Chrome";
			browser.chrome = true
		} else if (navigator.userAgent.indexOf("Safari") > 0) {
			browser.name = "Safari";
			browser.safari = true
		} else if (navigator.userAgent.indexOf("Opera") >= 0) {
			browser.name = "Opera";
			browser.opera = true
		} else {
			browser.name = "unknow"
		}
		var n = {
			focus: false
		};
		e(t).find(".edit_area").on("focus", function() {
			n.focus = true
		});
		e(t).find(".edit_area").on("blur", function() {
			n.focus = false
		});
		e(t).find(".edit_area").on("click", function(a) {
			var n = window.getSelection ? window.getSelection() : document.selection;
			i.range = n.createRange ? n.createRange() : n.getRangeAt(0);
			e(t).find(".editInsert").fadeOut(300)
		});
		e(t).find(".edit_area").on("keyup", function(n) {
			var s = n || window.event;
			var r = s.keyCode || s.charCode;
			var o = e(this).html(),
				d = "",
				l = /<div>/.test(o);
			if (r == 13) {
				if (l && n(this).find("div").html() != "") {
					d = o.replace("<div>", "<br>");
					d = d.replace("</div>", "");
					e(this).html(d);
					var f = e(t).find(".edit_area")[0];
					if (!f) return;
					f.focus();
					var c = window.getSelection ? window.getSelection() : document.selection;
					var u = i.checkBrowser().split(":");
					var m = i.checkBrowser().split(":")[0];
					var g = Number(i.checkBrowser().split(":")[1]);
					if (m == "IE" && g < 9) {} else {
						var h = e(o)[0];
						i.range.insertNode(h);
						c.addRange(i.range)
					}
				}
			}
			d == "" ? e(t).find("[name=" + a + "]").val(e(this).html()) : e(t).find("[name=" + a + "]").val(d)
		})
	}
})(jQuery, eub);
(function(i, e) {
	var t = e.editor ? e.editor : e.register("eub.editor");
	t.isupimages = true;
	t.upimages = function() {
		i(".longsf").hide();
		i("#uploadImg").fileupload({
			url: "/admin/upload.php",
			dataType: "json",
			formData: {
				act: "upload",
				type: "image",
				category: "weixin"
			},
			send: function(e, t) {
				if (t.files[0].size > 5242880) {
					alert("图片大于5M");
					return false
				}
				i(".longsfds").html("上传图片中");
				i(".longsf").show()
			},
			done: function(e, t) {
				if (t.result.error != 1) {
					i(".longsf").hide();
					var a = i('<li class="img_item js_imageitem"></li>'),
						s = '<label class="frm_checkbox_label img_item_bd">' + '<img src="' + t.result.data.src + '" alt="' + t.result.data.title + '" class="pic">' + '<span class="lbl_content">' + t.result.data.title + "</span> " + '<div class="selected_mask">' + '<div class="selected_mask_inner"></div>' + '<div class="selected_mask_icon"></div>' + "</div>" + "</label>";
					a.attr("data-url", t.result.data.src);
					a.attr("data-id", t.result.data.id);
					a.html(s);
					i(".img_list").prepend(a);
					i(".img_list li").eq(9).remove()
				}
			}
		})
	};
	t.image = function(a) {
		var s = a.data.msg;
		e.popup.popuEditorHtml({
			dialogClass: "img_dialog_wrp",
			name: CONFIG.MASS.EDITOR.CHOICE + CONFIG.MASS.EDITOR.IMAGES,
			close: "关闭",
			appengHtml: s
		}, function() {
			e.editor.jqdom = null;
			e.editor[a.isid] = undefined;
			e.editor[a.istypes] = "text"
		});
		e.tools.clickPaging("img_lists", a.istype, CONFIG.MASS.EDITOR_URL.CHOICE + "type=image&first=&group=&page=");
		t.tab(".img_lists", "li").confirmBtn(".js_btn", a.dataTab, a.dataInd, a.dataTooltip, a.objsid, a.objstype, a.objdomg);
		if (a.isdomgs) {
			t.upimages()
		} else {
			i(".in_dialog >div").hide()
		}
	}
})(jQuery, eub);
(function(t, e) {
	var a = e.register("eub.editor");
	a.remoMultiContent = function(a, i, d) {
		t(a).on("click", ".link_dele", function() {
			var a = i ? i : "dataid",
				o = d ? d : "datatype";
			e.editor.jqdom = null;
			e.editor[a] = undefined;
			e.editor[o] = "text";
			e.editor.indexDom = 0;
			t("[name='" + a + "']").val(e.editor[a]);
			t("[name='" + o + "']").val(e.editor[o]);
			t(".tab_panel .tab_content").eq(0).show().siblings().hide();
			t(this).parent().remove()
		})
	};
	a.confirmBtn = function(i, d, o, n, s, r, l, c) {
		t(i).on("click", function() {
			if (t(this).parent("span").hasClass("btn_primary") && e.editor.jqdom && parseInt(t(this).attr("data-index")) == 0) {
				var i = null,
					m = e.editor.jqdom.attr("data-id"),
					f = e.editor.jqdom.attr("data-url") ? e.editor.jqdom.attr("data-url") : e.editor.jqdom.find(".pic").attr("src"),
					_ = e.editor.jqdom.attr("data-fileid"),
					h = "",
					v = e.editor.jqdom.parent().next().html(),
					b = e.editor.jqdom.html(),
					p = e.editor.jqdom.find(".appmsg_content").html();
				e.editor[s] = m;
				if (t.isFunction(c)) {
					c()
				}
				switch (n) {
				case CONFIG.MASS.EDITOR.IMAGES:
					h = '<div id="msgSender_media_1_2">' + '<div class="appmsgSendedItem simple_img" data-id="' + m + '">' + '<a class="title_wrp" href="' + f + '" target="_blank">' + '<img class="icon" src="' + f + '">' + "</a>" + "</div>" + '<a href="javascript:;" class="link_dele">删除</a>' + "</div>";
					a[r] = "image";
					break;
				case CONFIG.MASS.EDITOR.VOICE:
					h = '<div id="msgSender_media_1_3">' + v + '<a href="javascript:;" class="link_dele">删除</a>' + "</div>";
					a[r] = "voice";
					break;
				case CONFIG.MASS.EDITOR.VIDEO:
					h = '<div id="msgSender_media_1_4">' + '<div id="none" class="richvideo Js_videomsg" data-id=' + m + ">" + b + "</div>" + '<a href="javascript:;" class="link_dele">删除</a>' + "</div>";
					a[r] = "video";
					break;
				case CONFIG.MASS.EDITOR.NEWS:
					h = '<div id="msgSender_media_1_5">' + '<div class="appmsg" data-id="' + m + '" data-fileid="' + _ + '">' + p + "</div>" + '<a href="javascript:;" class="link_dele">删除</a>' + "</div>";
					a[r] = "news";
					break
				}
				t(l).find(d).html(h);
				t(this).closest(".dialog_wrp").remove();
				t(".bodyblock").remove();
				t(l).find(".tab_content").eq(o).show().siblings().hide();
				t("[name='" + s + "']").val(e.editor[s]);
				t("[name='" + r + "']").val(e.editor[r])
			} else if (parseInt(t(this).attr("data-index")) == 1) {
				t(this).closest(".dialog_wrp").remove();
				t(".bodyblock").remove()
			}
		});
		return this
	};
	a.tab = function(a, i) {
		t(a).on("click", i, function() {
			var d = t(this).find(".img_item_bd");
			e.editor.jqdom = t(this);
			if (t(this).hasClass("selected")) {
				e.editor.jqdomid = "";
				t(this).removeClass("selected");
				t(".dialog_ft_desc .js_selected").html("0");
				t(".dialog .btn.green").addClass("disabled").removeClass("btn_primary")
			} else {
				e.editor.jqdomid = t(this).attr("data-id");
				t(".dialog_ft_desc .js_selected").html("1");
				t(".dialog .btn.green").removeClass("disabled").addClass("btn_primary");
				t(a + " " + i).removeClass("selected");
				t(this).addClass("selected")
			}
			return false
		});
		return this
	};
	a.isclick = true;
	a.initType = function(i, d, o, n) {
		var s = d ? d : "dataid",
			r = o ? o : "datatype",
			l = i ? i : "#js_msgSender",
			c = true;
		!t("[name='" + s + "']")[0] ? t(l).append('<input type="hidden" name=' + s + ">") : false;
		!t("[name='" + r + "']")[0] ? t(l).append('<input type="hidden" name=' + r + ' value="text">') : false;
		e.tools.textEditor(l, s);
		var m = 0,
			f = "",
			_ = t(l).attr("data-type"),
			h = t(l).attr("data-content"),
			v = t(l).attr("data-category");
		if (_ != "" && _) {
			if (_ == "text") {
				t(l).find(".js_editorArea").html(t(l).attr("data-content"));
				a[r] = "text";
				t("[name='" + s + "']").val(t(l).attr("data-content"));
				t("[name='" + r + "']").val(e.editor[r])
			} else {
				e.tools.ajax("get", CONFIG.MASS.EDITOR_URL.CHOICE_INFO + "type=" + _ + "&id=" + h, {}, function(i) {
          switch (_) {
					case "image":
						a[r] = "image";
						a[s] = h;
						t(l).find(".tab_content").eq(1).find(".inner").html(i.data.html);
						t(l).find(".tab_content").eq(1).show().siblings().hide();
						break;
					case "voice":
						a[r] = "voice";
						a[s] = h;
						e.tools.audioPlay();
						t(l).find(".tab_content").eq(2).find(".inner").html(i.data.html);
						t(l).find(".tab_content").eq(2).show().siblings().hide();
						e.tools.audioPlay(".js_audioArea", ".simple_audiomsg");
						break;
					case "video":
						a[r] = "video";
						a[s] = h;
						t(l).find(".tab_content").eq(3).find(".inner").html(i.data.html);
						t(l).find(".tab_content").eq(3).show().siblings().hide();
						break;
					case "news":
						a[s] = [];
						var d = "";
						a[r] = "news";
						a[s] = h;
						t(l).find(".tab_content").eq(4).find(".inner").html(i.data.html);
						t(l).find(".tab_content").eq(4).show().siblings().hide();
						break
					}
					t("[name='" + s + "']").val(e.editor[s]);
					t("[name='" + r + "']").val(e.editor[r])
				})
			}
		} else {
			e.editor.jqdom = null;
			e.editor[s] = undefined;
			e.editor[r] = t(l + " .tab_navs li").eq(0).attr("data-type");
			e.editor.indexDom = 0
		}
		a.remoMultiContent("body", s, r);
		if (a.isclick) {
			t(l).find(".tab_navs").on("click", "li", function() {
				var a = t(this).attr("data-tooltip"),
					i = t(this).attr("data-type"),
					d = t(this).attr("data-tab"),
					o = null,
					m = t(this).index(),
					f = null,
					_ = t(l).attr("data-category") ? "&category=" + t(l).attr("data-category") : "";
				if (a == CONFIG.MASS.EDITOR.TEXT) {
					f = {
						dataInd: m,
						objsid: s,
						objstype: r,
						objdomg: l
					};
					e.editor.text(f)
				} else {
					o = {
						tooltip: a
					};
					if (c) {
						c = false;
						e.tools.ajax("get", CONFIG.MASS.EDITOR_URL.CHOICE + "type=" + i + "&first=1&category=weixin&group=&page=1", o, function(o) {
							c = true;
							e.editor.indexDom = m;
							f = {
								data: o,
								dataTab: d,
								dataTooltip: a,
								dataInd: m,
								istype: i,
								objsid: s,
								objstype: r,
								objdomg: l,
								isdomgs: n
							};
							a == CONFIG.MASS.EDITOR.IMAGES ? e.editor.image(f) : false;
							a == CONFIG.MASS.EDITOR.VOICE ? e.editor.voice(f) : false;
							a == CONFIG.MASS.EDITOR.VIDEO ? e.editor.video(f) : false;
							a == CONFIG.MASS.EDITOR.NEWS ? e.editor.news(f) : false;
							e.editor.jqdomid = '';
							t(".dialog_hd .pop_closed").on("click", function() {
								t(this).closest(".dialog_wrp").remove();
								t(".bodyblock").remove()
							})
						})
					}
				}
			})
		}
	}
})(jQuery, eub);
(function(e, t) {
	var a = t.editor ? t.editor : t.register("eub.editor");
	a.newsTab = function(t) {
		e(".dialog_media_inner").on("click", t, function() {
			if (e(this).hasClass("selected")) {
				e(".media_news").find("#" + "appmsg" + e(this).attr("data-id")).remove();
				e(this).removeClass("selected")
			} else {
				var t = e("<div></div>");
				t.addClass("tuzh");
				t.attr("id", "appmsg" + e(this).attr("data-id"));
				t.attr("data-id", e(this).attr("data-id"));
				t.html(e(this).find(".appmsg_content").html());
				t.append('<a href="javascript:void(0);" class="btn red icn-only remove_icon"><i class="icon-remove icon-white"></i></a>');
				t.find(".appmsg_thumb_wrp").append('<img class="appmsg_thumbs" src="' + e(this).find(".appmsg_content .appmsg_thumb_wrp img").attr("data-src") + '">');
				e(".media_news").append(t);
				e(this).addClass("selected")
			}
			e(".media_news").sortable({
				axis: "y",
				cursor: "move",
				items: ".tuzh",
				revert: true,
				placeholder: "sortable-box-placeholder round-all",
				forcePlaceholderSize: true,
				update: function(e, t) {}
			})
		})
	};
	a.yesBtn = function(t, s, i) {
		e(".dialog .disabled").on("click", function() {
			if (e(".media_news .tuzh")[0]) {
				a[s] = [];
				e(".media_news .tuzh").each(function() {
					a[s].push(e(this).attr("data-id"))
				});
				var n = '<div id="msgSender_media_1_5">' + '<div class="appmsg">' + e(".media_news").html() + "</div>" + '<a href="javascript:;" class="link_dele">删除</a>' + "</div>";
				e(i).find(".tab_panel .tab_content").eq(4).find(".inner").html(n);
				e(i).find(".tab_panel .tab_content").eq(4).show().siblings().hide();
				a[t] = "news";
				e("[name='" + s + "']").val(a[s]);
				e("[name='" + t + "']").val(a[t]);
				e(".appmsg .remove_icon").remove();
				e(".dialog_wrp").remove()
			}
		});
		e(".media_news").on("click", ".icn-only", function() {
			e(this).parent().remove();
			e("." + e(this).parent().attr("id")).removeClass("selected")
		})
	};
	a.sousuo = function() {
		e("#msgSearchBtn").on("click", function() {
			var a = e("#msgSearchInput").val();
			t.tools.ajax("get", CONFIG.MASS.EDITOR_URL.CHOICE + "type=news&page=1&filter=" + a, {}, function(a) {
				e(".appmsg_list").html(a.msg);
				e(".page_num label").eq(0).html("1");
				e(".page_num label").eq(1).html(a.data.count);
				e(".page_prev").hide();
				e(".page_next").show();
				t.tools.corresponding(".media_news .tuzh")
			})
		});
		e(".del_btn").on("click", function() {
			t.tools.ajax("get", CONFIG.MASS.EDITOR_URL.CHOICE + "type=news&page=1&filter=&group=", {}, function(a) {
				e("#msgSearchInput").val("");
				e(".appmsg_list").html(a.msg);
				e(".page_num label").eq(0).html("1");
				e(".page_num label").eq(1).html(a.data.count);
				e(".page_prev").hide();
				e(".page_next").show();
				t.tools.corresponding(".media_news .tuzh")
			})
		})
	};
	a.addHtmls = function(t) {
		if (e(t).attr("data-type") == "news") {
			var a = e(t).attr("data-content").split(",");
			var s = e(".js_appmsgArea .appmsg").html();
			e(".media_news").html(s);
			e(".media_news .tuzh").append('<a href="javascript:void(0);" class="btn red icn-only remove_icon"><i class="icon-remove icon-white"></i></a>');
			e(".media_news").sortable({
				axis: "y",
				cursor: "move",
				items: ".tuzh",
				revert: true,
				placeholder: "sortable-box-placeholder round-all",
				forcePlaceholderSize: true,
				update: function(e, t) {}
			});
			for (var i = 0; i < a.length; i++) {
				e(".js_appmsg_list").find(".appmsg" + a[i]).addClass("selected")
			}
		}
	};
	a.news = function(s) {
		var i = s.data.msg;
		t.popup.popuEditorHtml({
			dialogClass: "appmsg_dialog_wrp",
			name: "选择素材",
			close: "关闭",
			appengHtml: i
		}, function() {
			t.editor.jqdom = null;
			t.editor[s.objsid] = undefined;
			t.editor[s.objstype] = "text"
		});
		a.newsTab(".js_appmsg_list .appmsg");
		a.yesBtn(s.objstype, s.objsid, s.objdomg);
		a.remoMultiContent(".js_appmsgArea");
		t.tools.clickPaging("appmsg_list", s.istype, CONFIG.MASS.EDITOR_URL.CHOICE + "type=news&first=&group=&page=");
		e(".appmsg_media_dialog").find("input").on("focus", function() {});
		a.sousuo();
		a.addHtmls(s.objdomg)
	}
})(jQuery, eub);
(function(e, t) {
	var i = t.editor ? t.editor : t.register("eub.editor");
	i.text = function(i) {
		t.editor.jqdom = null;
		t.editor[i.isid] = undefined;
		t.editor[i.objstype] = "text";
		t.editor.indexDom = 0;
		e("[name='" + i.isid + "']").val(" ");
		e("[name='" + i.objstype + "']").val(t.editor[i.objstype]);
		e(i.objdomg).find(".tab_content").eq(i.dataInd).show().siblings().hide()
	}
})(jQuery, eub);
(function(i, o) {
	var t = o.editor ? o.editor : o.register("eub.editor");
	t.video = function(i) {
		var t = i.data.msg;
		o.popup.popuEditorHtml({
			dialogClass: "appmsg_dialog_wrp",
			name: "选择视频",
			close: "关闭",
			appengHtml: t
		}, function() {
			o.editor.jqdom = null;
			o.editor[i.isid] = undefined;
			o.editor[i.istypes] = "text"
		});
		o.tools.clickPaging("media_dialog", i.istype, CONFIG.MASS.EDITOR_URL.CHOICE + "type=video&first=&group=&page=");
		o.editor.tab("#js_videomsg_list", ".richvideo").confirmBtn(".js_btn", i.dataTab, i.dataInd, i.dataTooltip, i.objsid, i.objstype, i.objdomg);
		o.tools.videoPlay()
	}
})(jQuery, eub);
(function(a, i) {
	var e = i.editor ? i.editor : i.register("eub.editor");
	e.isupvoices = true;
	e.upvoices = function() {
		a(".longsf").hide();
		a("#uploadVoice").fileupload({
			url: "/admin/upload.php",
			dataType: "json",
			formData: {
				act: "upload",
				type: "voice",
				category: "weixin"
			},
			send: function(i, e) {
				if (e.files[0].size > 31457280) {
					alert("音频不能大于30M");
					return false
				}
				a(".longsfds").html("上传音频中");
				a(".longsf").show()
			},
			done: function(i, e) {
				if (e.result.error != 1) {
					a(".longsf").hide();
					var s = new Date;
					var t = a('<li class="media_item"></li>'),
						d = '<div class="media_info">' + '<label class="media_name frm_radio_label" for="checkbox' + s.getTime() + '" data-id="' + e.result.data.id + '">' + '    <i class="icon_radio"></i>' + '    <input name="media" type="radio" class="frm_radio" value="207827452">' + e.result.data.title + "</label>" + '<span class="media_size">' + e.result.data.size + "</span>" + '<span class="media_time">' + e.result.data.ctime + "</span>" + "</div>" + '<div data-id="' + e.result.data.id + '" data-type="3" class="media_content">' + '<div class="appmsgSendedItem simple_audiomsg" data-aid="" data-id="' + e.result.data.id + '" data-source="file">' + '<div class="adiu">' + '    <audio src="' + e.result.data.src + '" loop="loop"></audio>' + "</div>" + '<a class="title_wrp" href="javascript:;" title="点击播放">' + '    <span class="icon icon_lh" src=""></span>' + '    <span class="title">[语音' + parseInt(e.result.data.duration) + '"]</span>' + "</a>" + '<p class="desc">' + parseInt(e.result.data.duration) + '"</p>' + "</div>" + "</div>";
					t.html(d);
					a(".js_media_list").prepend(t)
				}
			}
		})
	};
	e.voice = function(s) {
		var t = s.data.msg;
		i.popup.popuEditorHtml({
			dialogClass: "appmsg_dialog_wrp",
			name: "选择语音",
			close: "关闭",
			appengHtml: t
		}, function() {
			i.editor.jqdom = null;
			i.editor[s.isid] = undefined;
			i.editor[s.istypes] = "text"
		});
		i.tools.audioPlay(".js_media_list", ".simple_audiomsg");
		i.tools.clickPaging("js_media_list", s.istype, CONFIG.MASS.EDITOR_URL.CHOICE + "type=voice&first=&group=&page=");
		e.tab(".appmsg_dialog_wrp", ".media_item label").confirmBtn(".js_btn", s.dataTab, s.dataInd, s.dataTooltip, s.objsid, s.objstype, s.objdomg);
		if (s.isdomgs) {
			e.upvoices()
		} else {
			a(".in_dialog").hide()
		}
	}
})(jQuery, eub);